class CreatePolyUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :poly_users do |t|
      t.text :content
      t.references :creator, polymorphic: true, null: false

      t.timestamps
    end
  end
end
