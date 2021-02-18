class Todo < ApplicationRecord
validates :title, :body, presence: true
validates :done, inclusion: { in: [true, false] }
end

# == Schema Information
#
# Table name: todos
#
# id :integer not null, primary key
# title :string not null