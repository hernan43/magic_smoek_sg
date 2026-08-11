class CreateProjects < ActiveRecord::Migration[8.1]
  def change
    create_table :projects do |t|
      t.integer :user_id
      t.string :name
      t.text :description
      t.boolean :is_public, default: true

      t.timestamps
    end
  end
end
