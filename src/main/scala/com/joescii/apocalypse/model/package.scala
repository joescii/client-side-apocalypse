package com.joescii.apocalypse

import net.liftweb.http.{S, SessionVar}

package object model {
  def isLocal = S.request.map { req =>
    req.hostName == "localhost"
  }.openOr(false)

  object Presenter extends SessionVar[Boolean](isLocal)
}
