Rails.application.routes.draw do
  resources :reservations
  resources :flights
  resources :airplanes
  get '/users/edit' => 'users#edit'
  resources :users, :only => [:new, :create, :index, :update]
  get '/signup' => 'users#new'

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
