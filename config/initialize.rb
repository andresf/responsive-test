set :views, 'lib/views'
set :public_folder, File.dirname(__FILE__) + '/public'

Mongoid.load! "#{File.dirname(__FILE__)}/mongoid.yml"
