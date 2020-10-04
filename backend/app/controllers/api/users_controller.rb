class Api::UsersController < ApplicationController
  # ログインユーザーを返す
  def current
    render json: current_api_user.to_json(only: %i[id email name image])
  end
end
