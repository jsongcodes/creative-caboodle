class ResourcesController < ApplicationController
    def index
        resources = Resource.all
        render json: resources, status: :ok
    end

    def show
        resource = find_resource
        render json: resource, status: :ok
    end

    def create
        # resource = @current_user.resources.create!(resource_params)

        resource = Resource.create!(resource_params)
        # take obj params out of the 
        # dropdown of topics iterate through those ids to create topic
        # if it doesn't exist, it will need to be created 
        # look through documentation for has_many associations
        render json: resource, status: :created
    end

    def update
        resource = find_resource
        resource.update(favorites: params[:favorites])
        render json: resource, status: :accepted
    end

    def notes
        notes = Resource.find(params[:id]).notes
        render json: notes, status: :ok

                # notes = Resource.find(params[:id]).notes
        # notes.map do |note|
        #     if note.user_id == @current_user.id
        #         notes = note
        #         render json: notes, status: :ok
        #     end
            
        # end
    end

    def mostpopular
        resources = Resource.all.each do |resource|
            resource.favorites
        end
        sorted = resources.sort{|a, b| a <=> b}
        highest = sorted.first
        render json: highest, status: :ok
    end


    private 

    def find_resource
        Resource.find(params[:id])
    end

    def resource_params
        params.permit(:website_url, :title, :description, :favorites, :topics, :resources_topics)
    end
end
