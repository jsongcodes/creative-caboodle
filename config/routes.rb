Rails.application.routes.draw do
  resources :notes
  resources :topics, only: [:index, :show, :create]
  resources :resources, only: [:index, :show, :create, :update]
  resources :users, only: [:index]

  get '/resources/:id/notes', to: 'resources#notes'

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
end
