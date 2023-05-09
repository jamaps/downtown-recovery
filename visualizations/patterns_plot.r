# creates data ready for ranking plot in javascript on downtownrecovery.com
library(ggplot2)
library(thematic)
library(markdown)
library(readxl)
library(glue)
library(stringr)
library(zoo)
library(tidyverse)
library(broom)
library(ggrepel)
library(dplyr)
library(htmlwidgets)
library(scales)
library(plotly)

rm(list = ls())
gc()

setwd("~/git/downtown-recovery/shinyapp")

outlier_cities <- c("Dallas", "Oklahoma City", "Orlando")

# 2023-01: cuebiq data and color update
region_colors <- c("Canada" = "#DC4633",
                   "Midwest" = "#6FC7EA",
                   "Northeast" = "#8DBF2E",
                   "Pacific" = "#00A189",
                   "Southeast" = "#AB1368",
                   "Southwest" = "#F1C500")

colors_df <- data.frame(region = names(region_colors), color = region_colors)
colors_df

all_weekly_metrics <- read.csv("input_data/all_weekly_metrics_cuebiq_update_hll.csv")
all_weekly_metrics$metric <- str_replace(all_weekly_metrics$metric, "metro", "city")

# change this depending on which cities to plot
plot_cities <- c("Washington DC", "Salt Lake City, UT", "New York, NY","San Francisco, CA",
                 "El Paso, TX", "Los Angeles, CA", "San Diego, CA", "Portland, OR",
                 "Boston, MA", "Chicago, IL", "Vancouver, BC", "Toronto, ON")

plot_metric <- "downtown"

rolling_window <- 11

plot_data <-
  all_weekly_metrics %>%
  filter((display_title %in% plot_cities) & (metric == plot_metric)) %>%
  arrange(week) %>%
  group_by(city, metric) %>%
  mutate(rolling_avg = rollmean(
    normalized_visits_by_total_visits,
    as.numeric(rolling_window),
    na.pad = TRUE,
    align = "right"
  )) %>%
  ungroup() %>%
  dplyr::select(-normalized_visits_by_total_visits, -metro_size, -X) %>%
  inner_join(colors_df) %>%
  filter(!is.na(rolling_avg))

plot_data$week <- as.Date(plot_data$week)

plot_data <- plot_data %>%
  arrange(week, region, display_title)


plot_data %>% glimpse()

plot_data %>%
  group_by(display_title) %>%
  count() %>%
  print(n = Inf)

summary(plot_data)

# plotting function
starting_lqs <- plot_data %>%
  dplyr::filter(week == min(week)) %>%
  dplyr::select(city, region, week, rolling_avg) %>%
  dplyr::arrange(desc(rolling_avg))

ending_lqs <- plot_data %>%
  group_by(city) %>%
  mutate(latest_data = max(week)) %>%
  ungroup() %>%
  dplyr::filter(week == latest_data) %>%
  dplyr::select(city, region, week, rolling_avg) %>%
  dplyr::arrange(desc(rolling_avg))

total_cities <- length(unique(plot_data$display_title))
total_weeks <- length(unique(plot_data$week))


g1 <- ggplot(plot_data) + aes(
  x = week,
  y = rolling_avg,
  group = city,
  color = region,
  label = city
  
) + geom_line( size = 1) +
  geom_label_repel(
    data = starting_lqs,
    size = 3,
    direction = "y",
    hjust = "right",
    force = 1,
    na.rm  = TRUE,
    min.segment.length = 0,
    segment.curvature = 1e-20,
    segment.angle = 20,
    # this was determined to be a decent offset based on the commented out line below
    # leaving it in as future reference 
    nudge_x = rep(-35, times = total_cities),
    show.legend = FALSE
    #nudge_x = rep(-total_weeks / as.numeric(input$rolling_window[1]), times = total_cities),
  ) +
  geom_label_repel(
    data = ending_lqs,
    size = 3,
    direction = "y",
    hjust = "left",
    force = 1,
    na.rm = TRUE,
    min.segment.length = 0,
    segment.curvature =  1e-20,
    segment.angle = 20,
    # this was determined to be a decent offset based on the commented out line below
    # leaving it in as future reference 
    nudge_x = rep(35, times = total_cities),
    show.legend = FALSE
    #nudge_x = rep(total_weeks / as.numeric(input$rolling_window[1]), times = total_cities),
  ) +
  labs(title = "Recovery Quotient (RQ) Downtown",
       subtitle = paste(rolling_window, " week rolling average"),
       color = "Region",
       #y = "Metric",
       x = "Month"
  ) +
  theme(
    axis.text.x = element_text(size = 10, angle = 45, vjust = 1, hjust = 1),
    axis.title = element_text(size = 10, hjust = .5),
    plot.title = element_text(size = 12, hjust = .5),
    plot.subtitle = element_text(size = 10, hjust = .5)
  ) +
  scale_x_date(
    breaks = "4 weeks",
    date_labels = "%Y.%m",
    expand = expansion(mult = .15)
  ) +
  geom_vline(xintercept=as.Date("2020-09-01"), colour="grey") +
  annotate("text", x=as.Date("2020-09-01"), y=.1, 
           label="Alpha Surge", size=4, colour="darkgrey", hjust = 0) + 
  geom_vline(xintercept=as.Date("2021-06-01"), colour="grey") +
  annotate("text", x=as.Date("2021-06-01"), y=.1, 
            label="Delta Surge", size=4, colour="darkgrey", hjust = 0) + 
  geom_vline(xintercept=as.Date("2021-11-01"), colour="grey") +
  annotate("text", x=as.Date("2021-11-01"), y=.1, 
          label="Omicron Surge", size=4, colour="darkgrey", hjust = 0) + 
  scale_y_continuous("Metric", labels = scales::percent) +
  # 2023/01 update: changed to school of cities colors
  scale_color_manual(values = region_colors)
g1
