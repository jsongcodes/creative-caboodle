class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.string :content
      t.integer :resource_id
      t.integer :user_id

      t.timestamps
    end
  end
end
