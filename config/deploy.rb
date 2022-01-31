# -*- encoding : utf-8 -*-
require 'capistrano-rbenv'
load 'deploy/assets'
SSH_USER = 'root'
ssh_options[:port] = 35888
set :rake, "bundle exec rake"
set :application, "si_lu_le_gou_h5"
set :repository, "./dist"
set :scm, :none
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`
set :deploy_via, :copy
server = "112.126.91.145"

role :web, server
role :app, server                          # This may be the same as your `Web` server
role :db,  server, :primary => true # This is where Rails migrations will run
role :db,  server

set :deploy_to, "/opt/app/si_lu_le_gou_h5"

set :copy_exclude, [".git", "node_modules", "src"]
default_run_options[:pty] = true

set :user, SSH_USER

namespace :deploy do

  task :restart, :roles => :app, :except => { :no_release => true } do
    run "nginx -s reload"
  end

  namespace :assets do
    task :precompile do
      puts "== 这个命令没有用，但是rails中每次都会执行，所以使用空语句覆盖它。"
      #run "bundle install"
      #run "cd #{release_path} && bundle exec rake RAILS_ENV=production RAILS_GROUPS=assets assets:precompile "
    end
    task :symlink do
      puts "== 这个命令没有用，但是rails中每次都会执行，所以使用空语句覆盖它。"
    end
  end
end

desc "编译vuejs"
task :build_vue do
  puts '== 清空 dist 文件夹'
  puts `rm -rf dist/*`
  puts "== 编译 vuejs:"
  puts `npm run build`
end

task :remove_redundant_files do
  puts "== 删掉远程无用的文件夹： log, public, tmp"
  run "cd #{release_path} && trash log public tmp REVISION"
end

before "deploy", :build_vue
after "deploy", :remove_redundant_files
