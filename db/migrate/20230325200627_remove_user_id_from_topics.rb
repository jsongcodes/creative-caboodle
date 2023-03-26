class RemoveUserIdFromTopics < ActiveRecord::Migration[6.1]
  def change
    remove_column :topics, :user_id, :integer
  end
end
