extends layout

block content
	.container
		h1 Giriş Formu
		p.lead Kullanıcı adı ve şifrenizi giriniz.
		br
		form(
		role='form',
		action="/login",
		method="post",
		style='max-width: 300px;'
		)
			.form-group
				input.form-control(
			type='text',
			name="username",
			placeholder='Kullanıcı adı'
			)
			.form-group
				input.form-control(
			type='password',
			name="password",
			placeholder='Şifre'
			)
			button.btn.btn-default(type='submit') Gönder
			&nbsp;
				a(href='/')
					button.btn.btn-primary(type="button") Vazgeç
