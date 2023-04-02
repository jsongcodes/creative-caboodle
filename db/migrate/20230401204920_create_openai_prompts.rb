class CreateOpenaiPrompts < ActiveRecord::Migration[6.1]
  def change
    create_table :openai_prompts do |t|

      t.timestamps
    end
  end
end
