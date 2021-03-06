
range = [*'0'..'9',*'A'..'Z',*'a'..'z']

File.readlines(Dir.pwd + '/db/urls.txt').each do |f|
	long_url = f.delete("(").delete(")").delete(",")
	short_url = (0...6).map {range.sample}.join
	created_at = DateTime.now
	updated_at = DateTime.now
	click_count = 0

	inserts = "('#{long_url}', '#{short_url}', '#{created_at}','#{updated_at}', '#{click_count}')"

	Url.transaction do
		Url.connection.execute "INSERT INTO urls (long_url,short_url, created_at, updated_at, click_count) VALUES #{inserts};"
	end
end


