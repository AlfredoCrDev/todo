// Acrivho para configurar la opciones del Webpack

const HtmlWebpackPlugin    = require ('html-webpack-plugin'); // Plugin para trabjar los archivos html
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Plugin para minificar y trabajr los archivos css
const CopyPlugin           = require("copy-webpack-plugin"); //Plugin para copiar achrivos de una ruta en otra

const CssMinmizer = require ('css-minimizer-webpack-plugin');
const Terser      = require ('terser-webpack-plugin');

module.exports = {

    // Config para convertir el documento en modo development, tambien hay modoo product
    mode: 'production',

    // Config para limpiar los archivos que estan en el directorio dist
    output: {
        clean: true,
        filename: 'main.[contenthash].js'
    },

    // 
    module:{
        rules:[
            {
                // Se usa expresion regular que sirve para buscar una palabra en un string, en este caso la palabra o extension .html y $ para todo los html
                test: /\.html$/, 
    
                // Si encuentral algun html se invoca el html-loader que es un plugins de webpack
                loader: 'html-loader',                 
                
                options: { 
                    // Mueve los archivos html y si dicho html tiene algun atributo que cargue imagen o lo que sea tambien lo mueve
                    sources: false 
                }
            },
            { // Otra regla pero para buscar los archivos de estilos
                test: /\.css$/, 

                // Excluir achivo indicado ya que sino no se ejecuta la regla siguiente
                exclude: /style.css$/,
                
                // Usar los paquetes 
                use: ['style-loader', 'css-loader']
            },
            { // Otra regla para buscar un archivo de estilo general
                test: /style.css$/,

                // Usar el paquete require
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            { // Otra regla para buscar archivos tipo imagen
                test: /\.(png|jpg?e|gif)$/,
                loader: 'file-loader' 
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }

        ]
    },

    optimization:{
        minimize: true,
        minimizer:[
            new CssMinmizer(),
            new Terser(),
        ]
    },

    plugins: [
        // Se crea una instancial de Html.... que se importo.
        new HtmlWebpackPlugin({
            // Asignar titulo al documento
            title: 'Mi Webpack App',

            // Nombre del archivo de salida
            // filename: 'index.html', por defecto crea index.html

            // Plantilla de donde va a copiar el html
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            // filename: '[name].[fullhash].css', fullhash es para crear archivos con condificaciones diferentes
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
            {from: './src/assets/', to: "assets/"} 
            ]
        })
    ]
};