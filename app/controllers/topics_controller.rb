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

    # def create
    #     # topic = @current_user.topics.create!(topic_params)
    #     topic = topics.create!(topic_params)
    #     render json: topic, status: :created
    # end

    private 

    def find_topic
        Topic.find(params[:id])
    end

    def topic_params
        params.permit(
            :title, :image_url, :description)
    end
end



# {
#     "user_id": 35,
#     "topic_id": 27,
#     "video_url": "This was so helpful!",
#     "website_url": "google.com"
# }

# {
#     "title": "newtopic",
#     "image_url": "data:image/jpeg;base64,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",
#     "description": "cute cat"
# }