defmodule BackendWeb.Schema.LocationTypes do
  use Absinthe.Schema.Notation

  @desc "Location"
  object :location do
    field :lon, :float
    field :lat, :float
    field :address, :string
  end
end