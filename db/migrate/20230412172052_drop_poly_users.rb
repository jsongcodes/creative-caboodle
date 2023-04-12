class DropPolyUsers < ActiveRecord::Migration[6.1]
  def change
    drop_table :poly_users
  end
end
