class DropTableResourcesTopics < ActiveRecord::Migration[6.1]
  def change
    drop_table :resources_topics
  end
end
