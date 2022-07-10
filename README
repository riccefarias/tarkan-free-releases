## Video Realizando o Passo a Passo
Link do Video: https://www.youtube.com/watch?v=C62BR5JMkUc


## Instalação Traccar

Os comandos abaixo irão atualizar o apt e instalar o unzip e o mariadb-server
```
apt update
apt install unzip mariadb-server
sudo mysql_secure_installation
```

Atualizando o usuário root e criando o banco de dados "traccar"
```
mysql -u root --execute="ALTER USER 'root'@'localhost' IDENTIFIED BY 'root'; GRANT ALL ON *.* TO 'root'@'localhost' WITH GRANT OPTION; FLUSH PRIVILEGES; CREATE DATABASE traccar;"
```

Baixando o Traccar
```
wget https://www.traccar.org/download/traccar-linux-64-latest.zip
```

Descampactar e Instalar o Traccar
```
unzip traccar-linux-*.zip && ./traccar.run
```


Criar o arquivo de configuração
```
cat > /opt/traccar/conf/traccar.xml << EOF
<?xml version='1.0' encoding='UTF-8'?>

<!DOCTYPE properties SYSTEM 'http://java.sun.com/dtd/properties.dtd'>

<properties>

    <entry key="config.default">./conf/default.xml</entry>

    <entry key='database.driver'>com.mysql.cj.jdbc.Driver</entry>
    <entry key='database.url'>jdbc:mysql://localhost/traccar?serverTimezone=UTC&amp;useSSL=false&amp;allowMultiQueries=true&amp;autoReconnect=true&amp;useUnicode=yes&amp;characterEncoding=UTF-8&amp;sessionVariables=sql_mode=''</entry>
    <entry key='database.user'>root</entry>
    <entry key='database.password'>root</entry>

</properties>
EOF
```

Reiniciar o Traccar
```
service traccar restart
```

## Instalação Tarkan Free

Instalar NGINX
```
apt install nginx
```
Ir para a pasta WWW e clonar o repositório
```
cd /var/www
git clone https://github.com/riccefarias/tarkan-free-releases.git tarkan-desktop
```

Copiar o vHost padrão do Tarkan para sites-enabled
```
cp tarkan-desktop/sites-enabled/free /etc/nginx/sites-enabled/free
```

Reiniciar o NGINX
```
service nginx restart
```
