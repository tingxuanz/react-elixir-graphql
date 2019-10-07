defmodule Backend.Location do
  def get_coordinates(address) do
    case Geocoder.call(address) do
      {:error, nil} -> {:error}
      {:ok, coordinates} -> {:ok, coordinates}
    end
  end
end