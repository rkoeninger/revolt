# Protocol Notes

Looks like clients will interact with server by polling for state

```
; Client

{
	:type :register
	:name "rob"
}

; Server

{
	:type :registration
	:client-id "12341234-1234-1234-1234-123412341234"
}

; ------------------------------------------------

{
	:type :rejection
}

; ================================================

; Client

{
	:client-id "12341234-1234-1234-1234-123412341234"
	:type :waiting
}

; Server

{
	:type :wait
}

; ------------------------------------------------

{
	:type :prompt-bids
	:player-bank ...
	:player-inf ...
	:player-sup ...
}

; ------------------------------------------------

{
	:type :prompt-spy
	:player-bank ...
	:player-inf ...
	:player-sup ...
}

; ------------------------------------------------

{
	:type :prompt-apothecary
	:player-bank ...
	:player-inf ...
	:player-sup ...
}

; ------------------------------------------------

{
	:type :prompt-messenger
	:player-bank ...
	:player-inf ...
	:player-sup ...
}

; ------------------------------------------------

{
	:type :prompt-mayor
	:player-bank ...
	:player-inf ...
	:player-sup ...
}

; ------------------------------------------------

{
	:type :game-over
	:final-sup ...
	:player-bank ...
	:player-inf ...
	:player-sup ...
}

; ------------------------------------------------

{
	:type :game-drop
}

; ================================================

; Client

{
	:client-id "12341234-1234-1234-1234-123412341234"
	:type :place-bids
	:bids {
		:fig1 [1 1 1]
		:fig2 [1 1 1]
		:fig3 [1 1 1]
	}
}

; Server

{
	:type :wait
}

; ------------------------------------------------

{
	:type :rejection
}

; ================================================

; Client

{
	:client-id "12341234-1234-1234-1234-123412341234"
	:type :spy-choice
	:loc :tavern
	:player "joe"
}

; Server

{
	:type :wait
}

; ------------------------------------------------

{
	:type :rejection
}

; ================================================

; Client

{
	:client-id "12341234-1234-1234-1234-123412341234"
	:type :mayor-choice
	:loc :fortress
}

; Server

{
	:type :wait
}

; ------------------------------------------------

{
	:type :rejection
}

; ================================================

; Client

{
	:client-id "12341234-1234-1234-1234-123412341234"
	:type :messenger-choice
	:reassignments [
		{
			:loc-from :harbor
			:loc-to :palace
		}
		{
			:loc-from :market
			:loc-to :palace
		}
	]
}

; Server

{
	:type :wait
}

; ------------------------------------------------

{
	:type :rejection
}

; ================================================

; Client

{
	:client-id "12341234-1234-1234-1234-123412341234"
	:type :apothecary-choice
	:loc1 :town-hall
	:player1 "rob"
	:loc2 :plantation
	:player2 "joe"
}

; Server

{
	:type :wait
}

; ------------------------------------------------

{
	:type :rejection
}
```