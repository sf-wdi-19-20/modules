class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.integer :price
      t.belongs_to :order
      t.timestamps
    end
  end
end