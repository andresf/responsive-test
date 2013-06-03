class Application < Sinatra::Application

  get '/' do
    erb :index
  end

end
