class PlanesController < ApplicationController

  # GET /planes
  def index
    # find all planes in db
    @planes = Plane.all

    # render index view
    render :index
  end

  # GET /planes/new
  def new
    # render new view
    render :new
  end

  # POST /planes
  def create
    # new plane data from form
    plane_params = params.require(:plane).permit(:name, :design, :description)

    # create new plane in db
    plane = Plane.create(plane_params)

    # redirect to plane's show page
    redirect_to "/planes/#{plane.id}"
  end

  # GET /planes/:id
  def show
    # set id from url params
    plane_id = params[:id]

    # find plane in db by its id
    @plane = Plane.find(plane_id)

    # render show view
    render :show
  end

  # GET /planes/:id/edit
  def edit
    # set id from url params
    plane_id = params[:id]

    # find plane in db by its id
    @plane = Plane.find(plane_id)

    # render edit view
    render :edit
  end

  # PUT /planes/:id
  def update
    # set id from url params
    plane_id = params[:id]

    # find plane in db by its id
    plane = Plane.find(plane_id)

    # updated plane data from form
    plane_params = params.require(:plane).permit(:name, :design, :description)
    
    # update the plane in db
    plane.update_attributes(plane_params)

    # redirect to plane's show page
    redirect_to "/planes/#{plane.id}"
  end

  # DELETE /planes/:id
  def destroy
    # set id from url params
    plane_id = params[:id]

    # find plane in db by its id
    plane = Plane.find(plane_id)

    # delete the plane from db
    plane.destroy

    # redirect to all planes
    redirect_to "/planes"
  end

end