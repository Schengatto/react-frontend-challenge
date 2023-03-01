import { RouterType } from "../models/router";
import DetailMetric, { retrieveMetric } from "./metrics/DetailMetric";
import ListMetrics, { retrieveMetrics } from "./metrics/ListMetrics";
import { Navigate } from "react-router-dom";
import NotFound from "./NotFound";
import Error from "./Error";
import CreateMetric from "./metrics/CreateMetric";

const pagesData: RouterType[] = [
    {
        path: "metrics",
        element: <ListMetrics />,
        title: "metrics",
        loader: retrieveMetrics
    },
    {
        path: "metrics/create",
        element: <CreateMetric />,
        title: "metric",
    },
    {
        path: "metrics/:id",
        element: <DetailMetric />,
        title: "metric",
        loader: retrieveMetric
    },
    {
        path: "not-found",
        element: <NotFound />,
        title: "404"
    },
    {
        path: "error",
        element: <Error />,
        title: "error"
    },
    {
        path: "*",
        element: <Navigate to="/metrics" />,
        title: "default"
    }
];

export default pagesData;