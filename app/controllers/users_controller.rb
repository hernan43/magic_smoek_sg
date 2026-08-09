class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :use_jsx_rendering_defaults

  # GET /users/1
  def dashboard
  end

end
