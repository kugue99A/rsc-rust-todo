use axum::{handler::get, Router};
use std::net::SocketAddr;
use tokio::sync::Arc;
use hyper::Server;

mod presentation;
mod business;
mod data;

#[tokio::main]
async fn main() {
    let data_layer = Arc::new(data::DataLayer::new());
    let business_layer = Arc::new(business::BusinessLayer::new(data_layer));
    let presentation_layer = presentation::PresentationLayer::new(business_layer);

    let app = Router::new().route("/", get(presentation_layer.handle_request));

    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}