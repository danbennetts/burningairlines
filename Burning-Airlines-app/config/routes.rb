Rails.application.routes.draw do

  root to: 'users#home'

  resources :reservations
  resources :flights
  resources :airplanes
  resources :users, :only => [:edit, :new, :create, :index, :update, :index]
  get '/signup' => 'users#new'
  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy', :as => 'logout'
end
