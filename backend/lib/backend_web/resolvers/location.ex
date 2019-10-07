defmodule BackendWeb.Resolvers.Location do
  def get_coors(_parent, %{address: address}, _resolution) do
    case Backend.Location.get_coordinates(address) do
      {:error} -> {:error, "Address look up failed for provided address"}
      {:ok, coordinates} -> {:ok, %{lon: coordinates.lon, lat: coordinates.lat}}
    end
  end
end