class CreateJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :resources, :topics do |t|
      t.index :resource_id
      t.index :topic_id
    end
  end
end
