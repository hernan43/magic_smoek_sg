class UsersController < ApplicationController
  before_action :authenticate_user!

  # GET /users/1
  def dashboard
  end

end
