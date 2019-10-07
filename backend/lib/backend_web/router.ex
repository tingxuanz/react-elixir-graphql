defmodule BackendWeb.Router do
  use BackendWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api" do
    pipe_through :api

    if Mix.env == :dev do
      forward "/graphiql", Absinthe.Plug.GraphiQL, schema: BackendWeb.Schema
    end

    forward "/", Absinthe.Plug,
      schema: BackendWeb.Schema
  end
end
