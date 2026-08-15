class ProjectsController < ApplicationController
  before_action :authenticate_user!
  before_action :use_jsx_rendering_defaults
  before_action :set_project, only: %i[ show edit update destroy ]

  # GET /projects
  def index
    @projects = current_user.projects.kept.order(updated_at: :desc)
  end

  # GET /projects/1
  def show
  end

  # GET /projects/new
  def new
    @project = Project.new
    @project.is_public = true # make them public by default
  end

  # GET /projects/1/edit
  def edit
  end

  # POST /projects
  def create
    @project = Project.new(project_params)
    @project.user = current_user

    if @project.save
      redirect_to @project, notice: "Project was successfully created."
    else
      render :new, status: :unprocessable_content
    end
  end

  # PATCH/PUT /projects/1
  def update
    if @project.update(project_params)
      redirect_to @project, notice: "Project was successfully updated.", status: :see_other
    else
      render :edit, status: :unprocessable_content
    end
  end

  # DELETE /projects/1
  def destroy
    @project.discard
    redirect_to projects_path, notice: "Project removed.", status: :see_other
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.friendly.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def project_params
      params.expect(project: [ :name, :description, :is_public ])
    end
end
