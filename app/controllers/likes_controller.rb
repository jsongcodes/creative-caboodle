class LikesController < ApplicationController
before_action :find_post

   def create
     @resource.likes.create(user_id: @current_user.id)
     redirect_to post_path(@resource)
   end

   private

   def find_post
     @resource = Resource.find(params[:id])
   end

#    def already_liked?
#     Like.where(user_id: @current_user.id, resource_id:
#     params[:id]).exists?
#   end
 end