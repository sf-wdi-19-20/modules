class CreateRoles < ActiveRecord::Migration
  def change
    create_table :roles do |t|
      t.belongs_to :actor
      t.belongs_to :movie
      t.timestamps
    end
  end
end