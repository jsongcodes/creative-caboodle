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
        resource = @current_user.resources.create!(resource_params)
        render json: resource, status: :created
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

    private 

    def find_resource
        Resource.find(params[:id])
    end

    def resource_params
        params.permit(:topic_id, :user_id, :video_url, :website_url)
    end
end
