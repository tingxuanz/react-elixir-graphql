defmodule Backend.LocationTest do
  use ExUnit.Case

  test "valid address" do
    {:ok, coordinates} = Backend.Location.get_coordinates("70 Stephenson Street, Cremorne, VIC")
    assert coordinates.lat != nil
    assert coordinates.lon != nil
  end

  test "invalid address" do
    assert {:error} == Backend.Location.get_coordinates("invalid adress, aaa, bbb")
  end
end