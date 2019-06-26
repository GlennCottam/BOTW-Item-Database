package com.mackwnox.botwitems

import java.net.HttpURLConnection
import java.net.URL

fun getData()
{
    val url = URL("http://devin.mackwnox.ca:8081");

    with(url.openConnection() as HttpURLConnection)
    {
        requestMethod = "GET"
        println("\nSent 'GET' request to URL: $url; Response Code: $responseCode");

        inputStream.bufferedReader().use {
            it.lines().forEach{ line -> println(line)};
        }
    }
}