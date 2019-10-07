defmodule BackendWeb.Schema do
  use Absinthe.Schema
  import_types BackendWeb.Schema.LocationTypes

  alias BackendWeb.Resolvers

  query do

    @desc "Get a location"
    field :location, :location do
      arg :address, non_null(:string)
      resolve &Resolvers.Location.get_coors/3
    end

  end

end