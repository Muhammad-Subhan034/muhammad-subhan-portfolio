export type VizItem = {
  slug: string;
  title: string;
  caption: string;
  type: "video" | "image";
  src: string;
  poster?: string;
};

export const D3_EXPERIMENTS: VizItem[] = [
  {
    slug: "revenue-radial",
    title: "Revenue Radial Explorer",
    caption:
      "An interactive radial breakdown of $6.5M across 8 business segments. Hover any wedge for its live revenue, growth rate, and market share.",
    type: "video",
    src: "/visualization/D3_1.mp4",
    poster: "/visualization/D3_1-poster.jpg",
  },
  {
    slug: "pipeline-sankey",
    title: "Data Pipeline Sankey",
    caption:
      "Traces how data actually moves through a system, from 4 source systems through processing and storage to BI tools, with exact flow volumes on hover.",
    type: "video",
    src: "/visualization/D3_2.mp4",
    poster: "/visualization/D3_2-poster.jpg",
  },
  {
    slug: "analytics-pro",
    title: "Analytics Pro Dashboard",
    caption:
      "A full multi-panel product-analytics dashboard: KPI cards, a stock-level heatmap, and a price-vs-rating bubble matrix with per-product detail on hover.",
    type: "video",
    src: "/visualization/D3_3.mp4",
    poster: "/visualization/D3_3-poster.jpg",
  },
  {
    slug: "enterprise-network",
    title: "Enterprise Network Graph",
    caption:
      "A force-directed map of a 49-node microservices architecture. Click any node to trace its live connections through the rest of the system.",
    type: "video",
    src: "/visualization/D3_4.mp4",
    poster: "/visualization/D3_4-poster.jpg",
  },
  {
    slug: "physics-cluster",
    title: "Physics Cluster Playground",
    caption:
      "A tunable force simulation, 50 nodes and 190 links. Drag the gravity, link-distance, and charge sliders, or hit Explode, and watch it rearrange live.",
    type: "video",
    src: "/visualization/D3_5.mp4",
    poster: "/visualization/D3_5-poster.jpg",
  },
];

export const POWERBI_DASHBOARDS: VizItem[] = [
  {
    slug: "chicago-crime",
    title: "Chicago Crime Analysis",
    caption:
      "Winner, Softec 2025 Data Visualization Competition. 1.42M incidents broken down by district, hour of day, and arrest rate.",
    type: "image",
    src: "/visualization/chicago_crime_report.jpg",
  },
  {
    slug: "netflix-catalog",
    title: "Netflix Catalog Dashboard",
    caption:
      "Content-library breakdown by release year, rating, genre, and country: 6,232 titles, 68% movies to 32% TV shows.",
    type: "image",
    src: "/visualization/netflix_dashboard.jpg",
  },
  {
    slug: "global-happiness",
    title: "Global Happiness Report",
    caption:
      "Happiness score plotted against GDP, generosity, and health expectancy across every country, mapped and ranked.",
    type: "image",
    src: "/visualization/powerbi_global_happiness.jpg",
  },
];

export const PYDASH_ITEM: VizItem = {
  slug: "medical-appointments",
  title: "Medical Appointments Dashboard",
  caption:
    "Built during my AI Engineer internship at Ioptime, for a real-time medical-access project in Zimbabwe. Filterable city-disease heatmaps, appointment breakdowns, and density mapping. Shown here with representative sample data, not real patient records.",
  type: "video",
  src: "/visualization/py-dash.mp4",
  poster: "/visualization/py-dash-poster.jpg",
};
