require 'bundler/setup'
require 'toto'

@config = Toto::Config::Defaults
@config[:ext] = 'markdown'

task :default => :new

desc "Create a new article."
task :new do
  title = ask('Title: ')
  date = ask('Date (enter for today): ')
  content = ask("Content (Read until EOF):\n", true)
  slug = title.empty? ? nil : title.strip.slugize
  date = date.empty? ? Time.now : Time.parse(date)
  content = content.empty? ? "Once upon a time...\n\n" : content.strip + "\n"

  article = {'title' => title, 'date' => date.strftime("%d/%m/%Y")}.to_yaml
  article << "\n"
  article << content

  path = "#{Toto::Paths[:articles]}/#{date.strftime("%Y-%m-%d")}#{'-' + slug if slug}.#{@config[:ext]}"

  unless File.exist? path
    File.open(path, "w") do |file|
      file.write article
    end
    toto "an article was created for you at #{path}."
  else
    toto "I can't create the article, #{path} already exists."
  end
end

desc "Publish my blog."
task :publish do
  system "git push heroku master"
end
task :push => :publish
task :p => :publish

def toto msg
  puts "\n\n  toto ~ #{msg}\n\n"
end

def ask(message, eof = false)
  print message
  eof ? STDIN.read : STDIN.gets.chomp
end
