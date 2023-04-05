class CreateResourcesTopics < ActiveRecord::Migration[6.1]
  def change
    create_table :resources_topics do |t|
      t.references :resource, null: false, foreign_key: true
      t.references :topic, null: false, foreign_key: true

      t.timestamps
    end
  end
end
