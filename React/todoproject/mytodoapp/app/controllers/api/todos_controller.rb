class Api::TodosController < ApplicationController
before_action :deny_access_if_not_logged_in
  def index
    render json: Todo.all.where(user_id: current_user.id), include: :tags
  end

  def show
    render json: Todo.find(params[:id]), include: :tags
  end

  def create
    @todo = current_user.todos.new(todo_params)
    if @todo.save
      render json: @todo, include: :tags
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end
