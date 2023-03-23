class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.integer :resource_id
      t.string :title
      t.string :content

      t.timestamps
    end
  end
end
