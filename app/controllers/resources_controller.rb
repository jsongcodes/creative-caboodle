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
        @resource = @current_user.resources.create!(resource_params)
        @resource.topics << Topic.where(id: params[:topic_ids])

#         # @poly_user = PolyUser.create!(creator: @current_user, creator_type: 'User', creator_id: @current_user.id)

#         @resource.creator = PolyUser.find_or_create_by(creator_type: 'User', creator_id: current_user.id)
      

#   end

        render json: @resource, status: :created
    end

    def update
        resource = find_resource
        resource.update(favorites: params[:favorites])
        render json: resource, status: :accepted
    end

    def notes
        notes = Resource.find(params[:id]).notes
        render json: notes, status: :ok
    end

    # def mostpopular
    #     resources = Resource.all.each do |resource|
    #         resource.favorites
    #     end
    #     sorted = resources.sort{|a, b| b <=> a}
    #     highest = sorted.first
    #     render json: highest, status: :ok
    # end


    def my_resources
        @my_resources = @current_user.resources
        render json: @my_resources
      end

    private 

    def find_resource
        Resource.find(params[:id])
    end

    def resource_params
        params.require(:resource).permit(:website_url, :title, :favorites, :description, topic_ids: [])
      end
end
