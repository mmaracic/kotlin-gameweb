package hr.mmaracic.gameweb

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class GameWebApplication

fun main(args: Array<String>) {
	runApplication<GameWebApplication>(*args)
}
