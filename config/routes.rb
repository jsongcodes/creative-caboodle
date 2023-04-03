Rails.application.routes.draw do
  # # Routing logic: fallback requests for React Router.
  # # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :notes
  resources :topics, only: [:index, :show, :create]
  resources :resources, only: [:index, :show, :create, :update]
  resources :users, only: [:index]

  # get '/topics/:id/resources', to: 'topics#resources'
  get '/resources/:id/notes', to: 'resources#notes'

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  # resources :resources do
  #   resources :likes
  # end

  # post 'ai_request', to 'pages#ai_request'
  # root 'pages#home'

end
