class TopicsController < ApplicationController
    skip_before_action :authorize, only: :index
    
    def index
        topics = Topic.all
        render json: topics, status: :ok
    end

    def show
        topic = find_topic
        render json: topic, status: :ok
    end

    def resources
        resources = Topic.find(params[:id]).resources
        render json: resources, status: :ok
    end

    def create
        topic = Topic.create!(topic_params)
        render json: topic, status: :created
    end

    private 

    def find_topic
        Topic.find(params[:id])
    end

    def topic_params
        params.permit(
            :title, :image_url, :description)
    end
end