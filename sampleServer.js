// When the server receives a request on http://localhost:4000/set?somekey=somevalue it should store the passed key and value in memory
// When the server receives a request on http://localhost:4000/get?key=somekey it should return the value stored at somekey
// When the server receives a request on http://localhost:4000/del?key=somekey it should delete the value stored at somekey
// When the server receives a request on http://localhost:4000/keys it should return a JSON object with all the keys currently stored
// When the server receives a request on http://localhost:4000/count it should return the number of keys currently stored
// When the server receives a request on http://localhost:4000/reset it should delete all keys from the in-memory data store
// When the server receives a request on http://localhost:4000/flush it should delete all keys from the in-memory data store and reset the key counter to 0
// When the server receives a request on http://localhost:4000/incr?key=somekey it should increment the value stored at somekey by 1
// When the server receives a request on http://localhost:4000/decr?key=somekey it should decrement the value stored at somekey by 1
// When the server receives a request on http://localhost:4000/incrby?key=somekey&amount=10 it should increment the value stored at somekey by the amount specified
// When the server receives a request on http://localhost:4000/decrby?key=somekey&amount=10 it should decrement the value stored at somekey by the amount specified
// When the server receives a request on http://localhost:4000/mget?key=somekey1&key=somekey2 it should return a JSON object with the values stored at somekey1 and somekey2
// When the server receives a request on http://localhost:4000/mset?key=somekey1&value=somevalue1&key=somekey2&value=somevalue2 it should store the passed keys and values in memory
// When the server receives a request on http://localhost:4000/msetnx?key=somekey1&value=somevalue1&key=somekey2&value=somevalue2 it should store the passed keys and values in memory only if none of the keys exist
// When the server receives a request on http://localhost:4000/rpush?key=somekey&value=somevalue it should append the value to the end of the list stored at somekey
// When the server receives a request on http://localhost:4000/lpush?key=somekey&value=somevalue it should prepend the value to the start of the list stored at somekey
// When the server receives a request on http://localhost:4000/rpop?key=somekey it should remove and return the last element in the list stored at somekey
// When the server receives a request on http://localhost:4000/lpop?key=somekey it should remove and return the first element in the list stored at somekey
// When the server receives a request on http://localhost:4000/lrange?key=somekey&start=0&stop=1 it should return a JSON array with the elements of the list stored at somekey between the indices start and stop
// When the server receives a request on http://localhost:4000/sadd?key=somekey&member=somemember it should add the member to the set stored at somekey
// When the server receives a request on http://localhost:4000/srem?key=somekey&member=somemember it should remove the member from the set stored at somekey
// When the server receives a request on http://localhost:4000/sismember?key=somekey&member=somemember it should return 1 if the member is a member of the set stored at somekey, otherwise 0
// When the server receives a request on http://localhost:4000/smembers?key=somekey it should return a JSON array with all the members of the set stored at somekey
// When the server receives a request on http://localhost:4000/sunion?key=somekey1&key=somekey2 it should return a JSON array with all the members of the sets stored at somekey1 and somekey2
// When the server receives a request on http://localhost:4000/sinter?key=somekey1&key=somekey2 it should return a JSON array with the members that are common to the sets stored at somekey1 and somekey2
// When the server receives a request on http://localhost:4000/sdiff?key=somekey1&key=somekey2 it should return a JSON array with the members of the set stored at somekey1 that are not members of the set stored at somekey2
// When the server receives a request on http://localhost:4000/hset?key=somekey&field=somefield&value=somevalue it should set the hash stored at somekey to have a field with the name specified by the field argument and a value of the value argument
// When the server receives a request on http://localhost:4000/hget?key=somekey&field=somefield it should return the value associated with the field in the hash stored at somekey
// When the server receives a request on http://localhost:4000/hgetall?key=somekey it should return a JSON object with all the fields and values stored in the hash stored at somekey
// When the server receives a request on http://localhost:4000/hdel?key=somekey&field=somefield it should remove the specified field from the hash stored at somekey
// When the server receives a request on http://localhost:4000/hexists?key=somekey&field=somefield it should return 1 if the hash stored at somekey contains the specified field, otherwise 0
// When the server receives a request on http://localhost:4000/hkeys?key=somekey it should return a JSON array with all the fields in the hash stored at somekey
// When the server receives a request on http://localhost:4000/hvals?key=somekey it should return a JSON array with all the values in the hash stored at somekey
// When the server receives a request on http://localhost:4000/hlen?key=somekey it should return the number of fields in the hash stored at somekey
// When the server receives a request on http://localhost:4000/hincrby?key=somekey&field=somefield&amount=10 it should increment the value of the field stored at somekey by the amount specified
// When the server receives a request on http://localhost:4000/hincrbyfloat?key=somekey&field=somefield&amount=10.5 it should increment the value of the field stored at somekey by the amount specified
// When the server receives a request on http://localhost:4000/zadd?key=somekey&score=10&member=somemember it should add the specified member with the specified score to the sorted set stored at somekey
// When the server receives a request on http://localhost:4000/zrem?key=somekey&member=somemember it should remove the specified member from the sorted set stored at somekey
// When the server receives a request on http://localhost:4000/zrange?key=somekey&start=0&stop=1 it should return a JSON array with all the members of the sorted set stored at somekey with scores between the values specified by the start and stop arguments
// When the server receives a request on http://localhost:4000/zrevrange?key=somekey&start=0&stop=1 it should return a JSON array with all the members of the sorted set stored at somekey with scores between the values specified by the start and stop arguments in reverse order
// When the server receives a request on http://localhost:4000/zrangebyscore?key=somekey&min=0&max=10 it should return a JSON array with all the members of the sorted set stored at somekey with scores between the values specified by the min and max arguments
// When the server receives a request on http://localhost:4000/zrevrangebyscore?key=somekey&min=0&max=10 it should return a JSON array with all the members of the sorted set stored at somekey with scores between the values specified by the min and max arguments in reverse order
// When the server receives a request on http://localhost:4000/zcard?key=somekey it should return the number of members in the sorted set stored at somekey
// When the server receives a request on http://localhost:4000/zscore?key=somekey&member=somemember it should return the score of the specified member in the sorted set stored at somekey
// When the server receives a request on http://localhost:4000/zremrangebyrank?key=somekey&start=0&stop=1 it should remove all members in the sorted set stored at somekey with rank between the values specified by the start and stop arguments
// When the server receives a request on http://localhost:4000/zremrangebyscore?key=somekey&min=0&max=10 it should remove all members in the sorted set stored at somekey with score between the values specified by the min and max arguments
// When the server receives a request on http://localhost:4000/zrank?key=somekey&member=somemember it should return the rank of the specified member in the sorted set stored at somekey, with the scores ordered from low to high
// When the server receives a request on http://localhost:4000/zrevrank?key=somekey&member=somemember it should return the rank of the specified member in the sorted set stored at somekey, with the scores ordered from high to low
// When the server receives a request on http://localhost:4000/zcount?key=somekey&min=0&max=10 it should return the number of members in the sorted set stored at somekey with a score between the values specified by the min and max arguments
// When the server receives a request on http://localhost:4000/zincrby?key=somekey&increment=10&member=somemember it should increment the score of the specified member in the sorted set stored at somekey by the increment amount
// When the server receives a request on http://localhost:4000/expire?key=somekey&seconds=10 it should set a timeout on the specified key. After the timeout has expired, the key will automatically be deleted
// When the server receives a request on http://localhost:4000/expireat?key=somekey&timestamp=1451606400 it should set a timeout on the specified key as a UNIX timestamp. After the timeout has expired, the key will automatically be deleted
// When the server receives a request on http://localhost:4000/pexpire?key=somekey&milliseconds=10000 it should set a timeout on the specified key. After the timeout has expired, the key will automatically be deleted
// When the server receives a request on http://localhost:4000/pexpireat?key=somekey&timestamp=1451606400000 it should set a timeout on the specified key as a UNIX timestamp specified in milliseconds. After the timeout has expired, the key will automatically be deleted
// When the server receives a request on http://localhost:4000/ttl?key=somekey it should return the remaining time to live of a key that has a timeout. This introspection capability allows a Redis client to check how many seconds a given key will continue to be part of the dataset
// When the server receives a request on http://localhost:4000/pttl?key=somekey it should return the remaining time to live of a key that has a timeout. This introspection capability allows a Redis client to check how many milliseconds a given key will continue to be part of the dataset
// When the server receives a request on http://localhost:4000/persist?key=somekey it should remove the existing timeout on key, turning the key from volatile (a key with an expire set) to persistent (a key that will never expire as no timeout is associated)
// When the server receives a request on http://localhost:4000/subscribe?channel=somechannel it should subscribe the client to the specified channel
// When the server receives a request on http://localhost:4000/publish?channel=somechannel&message=somemessage it should publish the specified message on the specified channel
// When the server receives a request on http://localhost:4000/unsubscribe?channel=somechannel it should unsubscribe the client from the specified channel
// When the server receives a request on http://localhost:4000/psubscribe?pattern=somepattern it should subscribe the client to the channels matching the specified glob-style pattern
// When the server receives a request on http://localhost:4000/punsubscribe?pattern=somepattern it should unsubscribe the client from the channels matching the specified glob-style pattern
// When the server receives a request on http://localhost:4000/monitor it should listen for all requests received by the server in real time
// When the server receives a request on http://localhost:4000/dbsize it should return the number of keys in the currently-selected database
// When the server receives a request on http://localhost:4000/info it should return information and statistics about the server in an format that's simple to parse by computers and easy to read by humans
// When the server receives a request on http://localhost:4000/flushdb it should remove all keys from the currently-selected database
// When the server receives a request on http://localhost:4000/flushall it should remove all keys from all databases
// When the server receives a request on http://localhost:4000/save it should create a point-in-time snapshot of all data inside the Redis instance
// When the server receives a request on http://localhost:4000/bgsave it should create a point-in-time snapshot of all data inside the Redis instance in the background
// When the server receives a request on http://localhost:4000/lastsave it should return the UNIX time stamp of the last successfully saving of the dataset on disk
// When the server receives a request on http://localhost:4000/shutdown it should stop all the clients, save the DB, then quit the server
// When the server receives a request on http://localhost:4000/bgrewriteaof it should rewrite the append-only file in background when it gets too big
// When the server receives a request on http://localhost:4000/role it should return the role of the instance in the context of replication
// When the server receives a request on http://localhost:4000/client setname?name=somename it should set the current connection name
// When the server receives a request on http://localhost:4000/client getname it should return the current connection name
// When the server receives a request on http://localhost:4000/client list it should return the list of client connections
// When the server receives a request on http://localhost:4000/client kill?ip=
// When the server receives a request on http://localhost:4000/client kill?addr=
// When the server receives a request on http://localhost:4000/client kill?id=
// When the server receives a request on http://localhost:4000/client kill?skipme=yes it should close all the client connections except the current one
// When the server receives a request on http://localhost:4000/client pause?timeout=0 it should stop processing commands from clients for some time
// When the server receives a request on http://localhost:4000/config get?parameter=someparameter it should return the current configuration of a parameter
// When the server receives a request on http://localhost:4000/config set?parameter=someparameter&value=somevalue it should set a configuration parameter to the given value
// When the server receives a request on http://localhost:4000/config resetstat it should reset the stats returned by INFO
// When the server receives a request on http://localhost:4000/config rewrite it should rewrite the configuration file with the in memory configuration
// When the server receives a request on http://localhost:4000/append?key=somekey&value=somevalue it should append a value to a key
// When the server receives a request on http://localhost:4000/bitcount?key=somekey it should count set bits in a string
// When the server receives a request on http://localhost:4000/bitop?operation=and&destkey=somedestkey&key=somekey it should perform bitwise operations between strings
// When the server receives a request on http://localhost:4000/bitpos?key=somekey&bit=0 it should find first bit set or clear in a string
// When the server receives a request on http://localhost:4000/decr?key=somekey it should decrement the integer value of a key by one
// When the server receives a request on http://localhost:4000/decrby?key=somekey&decrement=10 it should decrement the integer value of a key by the given number
// When the server receives a request on http://localhost:4000/getbit?key=somekey&offset=0 it should returns the bit value at offset in the string value stored at key
// When the server receives a request on http://localhost:4000/getrange?key=somekey&start=0&end=3 it should get a substring of the string stored at a key
// When the server receives a request on http://localhost:4000/getset?key=somekey&value=somevalue it should set the string value of a key and return its old value
// When the server receives a request on http://localhost:4000/incr?key=somekey it should increment the integer value of a key by one
// When the server receives a request on http://localhost:4000/incrby?key=somekey&increment=10 it should increment the integer value of a key by the given amount
// When the server receives a request on http://localhost:4000/incrbyfloat?key=somekey&increment=10.5 it should increment the float value of a key by the given amount
// When the server receives a request on http://localhost:4000/mget?key=somekey it should get the values of all the given keys
// When the server receives a request on http://localhost:4000/mset?key=somekey&value=somevalue it should set multiple keys to multiple values
// When the server receives a request on http://localhost:4000/msetnx?key=somekey&value=somevalue it should set multiple keys to multiple values, only if none of the keys exist
// When the server receives a request on http://localhost:4000/psetex?key=somekey&milliseconds=1000&value=somevalue it should set the value and expiration in milliseconds of a key
// When the server receives a request on http://localhost:4000/setbit?key=somekey&offset=0&value=1 it should sets or clears the bit at offset in the string value stored at key
// When the server receives a request on http://localhost:4000/setex?key=somekey&seconds=10&value=somevalue it should set the value and expiration of a key
// When the server receives a request on http://localhost:4000/setnx?key=somekey&value=somevalue it should set the value of a key, only if the key does not exist
// When the server receives a request on http://localhost:4000/setrange?key=somekey&offset=0&value=somevalue it should overwrites part of the string stored at a key, starting at the specified offset
// When the server receives a request on http://localhost:4000/strlen?key=somekey it should get the length of the value stored in a key
// When the server receives a request on http://localhost:4000/hdel?key=somekey&field=somefield it should delete one or more hash fields
// When the server receives a request on http://localhost:4000/hexists?key=somekey&field=somefield it should determine if a hash field exists
// When the server receives a request on http://localhost:4000/hget?key=somekey&field=somefield it should get the value of a hash field
// When the server receives a request on http://localhost:4000/hgetall?key=somekey it should get all the fields and values in a hash
// When the server receives a request on http://localhost:4000/hincrby?key=somekey&field=somefield&increment=10 it should increment the integer value of a hash field by the given number
// When the server receives a request on http://localhost:4000/hincrbyfloat?key=somekey&field=somefield&increment=10.5 it should increment the float value of a hash field by the given amount
// When the server receives a request on http://localhost:4000/hkeys?key=somekey it should get all the fields in a hash
// When the server receives a request on http://localhost:4000/hlen?key=somekey it should get the number of fields in a hash
// When the server receives a request on http://localhost:4000/hmget?key=somekey&field=somefield it should get the values of all the given hash fields
// When the server receives a request on http://localhost:4000/hmset?key=somekey&field=somefield&value=somevalue it should set multiple hash fields to multiple values
// When the server receives a request on http://localhost:4000/hset?key=somekey&field=somefield&value=somevalue it should set the string value of a hash field
// When the server receives a request on http://localhost:4000/hsetnx?key=somekey&field=somefield&value=somevalue it should set the value of a hash field, only if the field does not exist
// When the server receives a request on http://localhost:4000/hvals?key=somekey it should get all the values in a hash
// When the server receives a request on http://localhost:4000/blpop?key=somekey&timeout=0 it should remove and get the first element in a list, or block until one is available
// When the server receives a request on http://localhost:4000/brpop?key=somekey&timeout=0 it should remove and get the last element in a list, or block until one is available
// When the server receives a request on http://localhost:4000/brpoplpush?source=somesource&destination=somedestination&timeout=0 it should pop a value from a list, push it to another list and return it; or block until one is available
// When the server receives a request on http://localhost:4000/lindex?key=somekey&index=0 it should get an element from a list by its index
// When the server receives a request on http://localhost:4000/linsert?key=somekey&position=before&pivot=somepivot&value=somevalue it should insert an element before or after another element in a list
// When the server receives a request on http://localhost:4000/llen?key=somekey it should get the length of a list
// When the server receives a request on http://localhost:4000/lpop?key=somekey it should remove and get the first element in a list
// When the server receives a request on http://localhost:4000/lpush?key=somekey&value=somevalue it should prepend one or multiple values to a list
// When the server receives a request on http://localhost:4000/lpushx?key=somekey&value=somevalue it should prepend a value to a list, only if the list exists
// When the server receives a request on http://localhost:4000/lrange?key=somekey&start=0&stop=10 it should get a range of elements from a list
// When the server receives a request on http://localhost:4000/lrem?key=somekey&count=0&value=somevalue it should remove elements from a list
// When the server receives a request on http://localhost:4000/lset?key=somekey&index=0&value=somevalue it should set the value of an element in a list by its index
// When the server receives a request on http://localhost:4000/ltrim?key=somekey&start=0&stop=10 it should trim a list to the specified range
// When the server receives a request on http://localhost:4000/rpop?key=somekey it should remove and get the last element in a list
// When the server receives a request on http://localhost:4000/rpoplpush?source=somesource&destination=somedestination it should remove the last element in a list, prepend it to another list and return it
// When the server receives a request on http://localhost:4000/rpush?key=somekey&value=somevalue it should append one or multiple values to a list
// When the server receives a request on http://localhost:4000/rpushx?key=somekey&value=somevalue it should append a value to a list, only if the list exists
// When the server receives a request on http://localhost:4000/sadd?key=somekey&member=somemember it should add one or more members to a set
// When the server receives a request on http://localhost:4000/scard?key=somekey it should get the number of members in a set
// When the server receives a request on http://localhost:4000/sdiff?key=somekey it should subtract multiple sets
// When the server receives a request on http://localhost:4000/sdiffstore?destination=somedestination&key=somekey it should subtract multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/sinter?key=somekey it should intersect multiple sets
// When the server receives a request on http://localhost:4000/sinterstore?destination=somedestination&key=somekey it should intersect multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/sismember?key=somekey&member=somemember it should determine if a given value is a member of a set
// When the server receives a request on http://localhost:4000/smembers?key=somekey it should get all the members in a set
// When the server receives a request on http://localhost:4000/smove?source=somesource&destination=somedestination&member=somemember it should move a member from one set to another
// When the server receives a request on http://localhost:4000/spop?key=somekey it should remove and return one or multiple random members from a set
// When the server receives a request on http://localhost:4000/srandmember?key=somekey it should get one or multiple random members from a set
// When the server receives a request on http://localhost:4000/srem?key=somekey&member=somemember it should remove one or more members from a set
// When the server receives a request on http://localhost:4000/sunion?key=somekey it should add multiple sets
// When the server receives a request on http://localhost:4000/sunionstore?destination=somedestination&key=somekey it should add multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/zadd?key=somekey&score=0&member=somemember it should add one or more members to a sorted set, or update its score if it already exists
// When the server receives a request on http://localhost:4000/zcard?key=somekey it should get the number of members in a sorted set
// When the server receives a request on http://localhost:4000/zcount?key=somekey&min=0&max=10 it should count the members in a sorted set with scores within the given values
// When the server receives a request on http://localhost:4000/zincrby?key=somekey&increment=10&member=somemember it should increment the score of a member in a sorted set
// When the server receives a request on http://localhost:4000/zinterstore?destination=somedestination&key=somekey it should intersect multiple sorted sets and store the resulting sorted set in a new key
// When the server receives a request on http://localhost:4000/zrange?key=somekey&start=0&stop=10 it should return a range of members in a sorted set, by index
// When the server receives a request on http://localhost:4000/zrangebyscore?key=somekey&min=0&max=10 it should return a range of members in a sorted set, by score
// When the server receives a request on http://localhost:4000/zrank?key=somekey&member=somemember it should determine the index of a member in a sorted set
// When the server receives a request on http://localhost:4000/zrem?key=somekey&member=somemember it should remove one or more members from a sorted set
// When the server receives a request on http://localhost:4000/zremrangebyrank?key=somekey&start=0&stop=10 it should remove all members in a sorted set within the given indexes
// When the server receives a request on http://localhost:4000/zremrangebyscore?key=somekey&min=0&max=10 it should remove all members in a sorted set within the given scores
// When the server receives a request on http://localhost:4000/zrevrange?key=somekey&start=0&stop=10 it should return a range of members in a sorted set, by index, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zrevrangebyscore?key=somekey&max=10&min=0 it should return a range of members in a sorted set, by score, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zrevrank?key=somekey&member=somemember it should determine the index of a member in a sorted set, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zscore?key=somekey&member=somemember it should get the score associated with the given member in a sorted set
// When the server receives a request on http://localhost:4000/zunionstore?destination=somedestination&key=somekey it should add multiple sorted sets and store the resulting sorted set in a new key
// When the server receives a request on http://localhost:4000/hdel?key=somekey&field=somefield it should delete one or more hash fields
// When the server receives a request on http://localhost:4000/hexists?key=somekey&field=somefield it should determine if a hash field exists
// When the server receives a request on http://localhost:4000/hget?key=somekey&field=somefield it should get the value of a hash field
// When the server receives a request on http://localhost:4000/hgetall?key=somekey it should get all the fields and values in a hash
// When the server receives a request on http://localhost:4000/hincrby?key=somekey&field=somefield&increment=10 it should increment the integer value of a hash field by the given number
// When the server receives a request on http://localhost:4000/hincrbyfloat?key=somekey&field=somefield&increment=10 it should increment the float value of a hash field by the given amount
// When the server receives a request on http://localhost:4000/hkeys?key=somekey it should get all the fields in a hash
// When the server receives a request on http://localhost:4000/hlen?key=somekey it should get the number of fields in a hash
// When the server receives a request on http://localhost:4000/hmget?key=somekey&field=somefield it should get the values of all the given hash fields
// When the server receives a request on http://localhost:4000/hmset?key=somekey&field=somefield it should set multiple hash fields to multiple values
// When the server receives a request on http://localhost:4000/hset?key=somekey&field=somefield&value=somevalue it should set the string value of a hash field
// When the server receives a request on http://localhost:4000/hsetnx?key=somekey&field=somefield&value=somevalue it should set the value of a hash field, only if the field does not exist
// When the server receives a request on http://localhost:4000/hstrlen?key=somekey&field=somefield it should get the length of the value of a hash field
// When the server receives a request on http://localhost:4000/hvals?key=somekey it should get all the values in a hash
// When the server receives a request on http://localhost:4000/lindex?key=somekey&index=0 it should get an element from a list by its index
// When the server receives a request on http://localhost:4000/linsert?key=somekey&position=BEFORE&pivot=somepivot&value=somevalue it should insert an element before or after another element in a list
// When the server receives a request on http://localhost:4000/llen?key=somekey it should get the length of a list
// When the server receives a request on http://localhost:4000/lpop?key=somekey it should remove and get the first element in a list
// When the server receives a request on http://localhost:4000/lpush?key=somekey&value=somevalue it should prepend one or multiple values to a list
// When the server receives a request on http://localhost:4000/lpushx?key=somekey&value=somevalue it should prepend a value to a list, only if the list exists
// When the server receives a request on http://localhost:4000/lrange?key=somekey&start=0&stop=10 it should get a range of elements from a list
// When the server receives a request on http://localhost:4000/lrem?key=somekey&count=0&value=somevalue it should remove elements from a list
// When the server receives a request on http://localhost:4000/lset?key=somekey&index=0&value=somevalue it should set the value of an element in a list by its index
// When the server receives a request on http://localhost:4000/ltrim?key=somekey&start=0&stop=10 it should trim a list to the specified range
// When the server receives a request on http://localhost:4000/rpop?key=somekey it should remove and get the last element in a list
// When the server receives a request on http://localhost:4000/rpoplpush?source=somesource&destination=somedestination it should remove the last element in a list, prepend it to another list and return it
// When the server receives a request on http://localhost:4000/rpush?key=somekey&value=somevalue it should append one or multiple values to a list
// When the server receives a request on http://localhost:4000/rpushx?key=somekey&value=somevalue it should append a value to a list, only if the list exists
// When the server receives a request on http://localhost:4000/sadd?key=somekey&member=somemember it should add one or more members to a set
// When the server receives a request on http://localhost:4000/scard?key=somekey it should get the number of members in a set
// When the server receives a request on http://localhost:4000/sdiff?key=somekey it should subtract multiple sets and return the resulting set
// When the server receives a request on http://localhost:4000/sdiffstore?destination=somedestination&key=somekey it should subtract multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/sinter?key=somekey it should intersect multiple sets and return the resulting set
// When the server receives a request on http://localhost:4000/sinterstore?destination=somedestination&key=somekey it should intersect multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/sismember?key=somekey&member=somemember it should determine if a given value is a member of a set
// When the server receives a request on http://localhost:4000/smembers?key=somekey it should get all the members in a set
// When the server receives a request on http://localhost:4000/smove?source=somesource&destination=somedestination&member=somemember it should move a member from one set to another
// When the server receives a request on http://localhost:4000/spop?key=somekey it should remove and return one or multiple random members from a set
// When the server receives a request on http://localhost:4000/srandmember?key=somekey it should get one or multiple random members from a set
// When the server receives a request on http://localhost:4000/srem?key=somekey&member=somemember it should remove one or more members from a set
// When the server receives a request on http://localhost:4000/sunion?key=somekey it should add multiple sets and return the resulting set
// When the server receives a request on http://localhost:4000/sunionstore?destination=somedestination&key=somekey it should add multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/zadd?key=somekey&score=10&member=somemember it should add one or more members to a sorted set, or update its score if it already exists
// When the server receives a request on http://localhost:4000/zcard?key=somekey it should get the number of members in a sorted set
// When the server receives a request on http://localhost:4000/zcount?key=somekey&min=0&max=10 it should count the members in a sorted set with scores within the given values
// When the server receives a request on http://localhost:4000/zincrby?key=somekey&increment=10&member=somemember it should increment the score of a member in a sorted set
// When the server receives a request on http://localhost:4000/zinterstore?destination=somedestination&key=somekey it should intersect multiple sorted sets and store the resulting sorted set in a new key
// When the server receives a request on http://localhost:4000/zlexcount?key=somekey&min=0&max=10 it should count the number of members in a sorted set between a given lexicographical range
// When the server receives a request on http://localhost:4000/zrange?key=somekey&start=0&stop=10 it should return a range of members in a sorted set, by index
// When the server receives a request on http://localhost:4000/zrangebylex?key=somekey&min=0&max=10 it should return a range of members in a sorted set, by lexicographical range
// When the server receives a request on http://localhost:4000/zrangebyscore?key=somekey&min=0&max=10 it should return a range of members in a sorted set, by score
// When the server receives a request on http://localhost:4000/zrank?key=somekey&member=somemember it should determine the index of a member in a sorted set
// When the server receives a request on http://localhost:4000/zrem?key=somekey&member=somemember it should remove one or more members from a sorted set
// When the server receives a request on http://localhost:4000/zremrangebylex?key=somekey&min=0&max=10 it should remove all members in a sorted set between the given lexicographical range
// When the server receives a request on http://localhost:4000/zremrangebyrank?key=somekey&start=0&stop=10 it should remove all members in a sorted set within the given indexes
// When the server receives a request on http://localhost:4000/zremrangebyscore?key=somekey&min=0&max=10 it should remove all members in a sorted set within the given scores
// When the server receives a request on http://localhost:4000/zrevrange?key=somekey&start=0&stop=10 it should return a range of members in a sorted set, by index, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zrevrangebylex?key=somekey&min=0&max=10 it should return a range of members in a sorted set, by lexicographical range, ordered from higher to lower strings
// When the server receives a request on http://localhost:4000/zrevrangebyscore?key=somekey&min=0&max=10 it should return a range of members in a sorted set, by score, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zrevrank?key=somekey&member=somemember it should determine the index of a member in a sorted set, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zscore?key=somekey&member=somemember it should get the score associated with the given member in a sorted set
// When the server receives a request on http://localhost:4000/zunionstore?destination=somedestination&key=somekey it should add multiple sorted sets and store the resulting sorted set in a new key
// When the server receives a request on http://localhost:4000/bitcount?key=somekey it should count set bits in a string
// When the server receives a request on http://localhost:4000/bitop?operation=and&destination=somedestination&key=somekey it should perform bitwise operations between strings
// When the server receives a request on http://localhost:4000/bitpos?key=somekey&bit=0 it should find first bit set or clear in a string
// When the server receives a request on http://localhost:4000/decr?key=somekey it should decrement the integer value of a key by one
// When the server receives a request on http://localhost:4000/decrby?key=somekey&decrement=10 it should decrement the integer value of a key by the given number
// When the server receives a request on http://localhost:4000/getbit?key=somekey&offset=10 it should returns the bit value at offset in the string value stored at key
// When the server receives a request on http://localhost:4000/getrange?key=somekey&start=0&end=10 it should get a substring of the string stored at a key
// When the server receives a request on http://localhost:4000/getset?key=somekey&value=somevalue it should set the string value of a key and return its old value
// When the server receives a request on http://localhost:4000/incr?key=somekey it should increment the integer value of a key by one
// When the server receives a request on http://localhost:4000/incrby?key=somekey&increment=10 it should increment the integer value of a key by the given amount
// When the server receives a request on http://localhost:4000/incrbyfloat?key=somekey&increment=10 it should increment the float value of a key by the given amount
// When the server receives a request on http://localhost:4000/mget?key=somekey it should get the values of all the given keys
// When the server receives a request on http://localhost:4000/mset?key=somekey&value=somevalue it should set multiple keys to multiple values
// When the server receives a request on http://localhost:4000/msetnx?key=somekey&value=somevalue it should set multiple keys to multiple values, only if none of the keys exist
// When the server receives a request on http://localhost:4000/psetex?key=somekey&milliseconds=1000&value=somevalue it should set the value and expiration in milliseconds of a key
// When the server receives a request on http://localhost:4000/set?key=somekey&value=somevalue it should set the string value of a key
// When the server receives a request on http://localhost:4000/setbit?key=somekey&offset=10&value=1 it should sets or clears the bit at offset in the string value stored at key
// When the server receives a request on http://localhost:4000/setex?key=somekey&seconds=10&value=somevalue it should set the value and expiration of a key
// When the server receives a request on http://localhost:4000/setnx?key=somekey&value=somevalue it should set the value of a key, only if the key does not exist
// When the server receives a request on http://localhost:4000/setrange?key=somekey&offset=10&value=somevalue it should overwrites part of the string stored at key, starting at the specified offset
// When the server receives a request on http://localhost:4000/strlen?key=somekey it should get the length of the value stored in a key
// When the server receives a request on http://localhost:4000/hdel?key=somekey&field=somefield it should delete one or more hash fields
// When the server receives a request on http://localhost:4000/hexists?key=somekey&field=somefield it should determine if a hash field exists
// When the server receives a request on http://localhost:4000/hget?key=somekey&field=somefield it should get the value of a hash field
// When the server receives a request on http://localhost:4000/hgetall?key=somekey it should get all the fields and values in a hash
// When the server receives a request on http://localhost:4000/hincrby?key=somekey&field=somefield&increment=10 it should increment the integer value of a hash field by the given number
// When the server receives a request on http://localhost:4000/hincrbyfloat?key=somekey&field=somefield&increment=10 it should increment the float value of a hash field by the given amount
// When the server receives a request on http://localhost:4000/hkeys?key=somekey it should get all the fields in a hash
// When the server receives a request on http://localhost:4000/hlen?key=somekey it should get the number of fields in a hash
// When the server receives a request on http://localhost:4000/hmget?key=somekey&field=somefield it should get the values of all the given hash fields
// When the server receives a request on http://localhost:4000/hmset?key=somekey&field=somefield&value=somevalue it should set multiple hash fields to multiple values
// When the server receives a request on http://localhost:4000/hset?key=somekey&field=somefield&value=somevalue it should set the string value of a hash field
// When the server receives a request on http://localhost:4000/hsetnx?key=somekey&field=somefield&value=somevalue it should set the value of a hash field, only if the field does not exist
// When the server receives a request on http://localhost:4000/hvals?key=somekey it should get all the values in a hash
// When the server receives a request on http://localhost:4000/lindex?key=somekey&index=0 it should get an element from a list by its index
// When the server receives a request on http://localhost:4000/linsert?key=somekey&position=before&pivot=somepivot&value=somevalue it should insert an element before or after another element in a list
// When the server receives a request on http://localhost:4000/llen?key=somekey it should get the length of a list
// When the server receives a request on http://localhost:4000/lpop?key=somekey it should remove and get the first element in a list
// When the server receives a request on http://localhost:4000/lpush?key=somekey&value=somevalue it should prepend one or multiple values to a list
// When the server receives a request on http://localhost:4000/lpushx?key=somekey&value=somevalue it should prepend a value to a list, only if the list exists
// When the server receives a request on http://localhost:4000/lrange?key=somekey&start=0&stop=10 it should get a range of elements from a list
// When the server receives a request on http://localhost:4000/lrem?key=somekey&count=0&value=somevalue it should remove elements from a list
// When the server receives a request on http://localhost:4000/lset?key=somekey&index=0&value=somevalue it should set the value of an element in a list by its index
// When the server receives a request on http://localhost:4000/ltrim?key=somekey&start=0&stop=10 it should trim a list to the specified range
// When the server receives a request on http://localhost:4000/rpop?key=somekey it should remove and get the last element in a list
// When the server receives a request on http://localhost:4000/rpoplpush?source=somesource&destination=somedestination it should remove the last element in a list, prepend it to another list and return it
// When the server receives a request on http://localhost:4000/rpush?key=somekey&value=somevalue it should append one or multiple values to a list
// When the server receives a request on http://localhost:4000/rpushx?key=somekey&value=somevalue it should append a value to a list, only if the list exists
// When the server receives a request on http://localhost:4000/blpop?key=somekey&timeout=10 it should remove and get the first element in a list, or block until one is available
// When the server receives a request on http://localhost:4000/brpop?key=somekey&timeout=10 it should remove and get the last element in a list, or block until one is available
// When the server receives a request on http://localhost:4000/brpoplpush?source=somesource&destination=somedestination&timeout=10 it should pop a value from a list, push it to another list and return it; or block until one is available
// When the server receives a request on http://localhost:4000/sadd?key=somekey&member=somemember it should add one or more members to a set
// When the server receives a request on http://localhost:4000/scard?key=somekey it should get the number of members in a set
// When the server receives a request on http://localhost:4000/sdiff?key=somekey it should subtract multiple sets
// When the server receives a request on http://localhost:4000/rpush?key=somekey&value=somevalue it should append one or multiple values to a list
// When the server receives a request on http://localhost:4000/rpushx?key=somekey&value=somevalue it should append a value to a list, only if the list exists
// When the server receives a request on http://localhost:4000/sadd?key=somekey&member=somemember it should add one or more members to a set
// When the server receives a request on http://localhost:4000/scard?key=somekey it should get the number of members in a set
// When the server receives a request on http://localhost:4000/sdiff?key=somekey it should subtract multiple sets
// When the server receives a request on http://localhost:4000/sdiffstore?destination=somedestination&key=somekey it should subtract multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/sinter?key=somekey it should intersect multiple sets
// When the server receives a request on http://localhost:4000/sinterstore?destination=somedestination&key=somekey it should intersect multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/sismember?key=somekey&member=somemember it should determine if a given value is a member of a set
// When the server receives a request on http://localhost:4000/rpush?key=somekey&value=somevalue it should append one or multiple values to a list
// When the server receives a request on http://localhost:4000/rpushx?key=somekey&value=somevalue it should append a value to a list, only if the list exists
// When the server receives a request on http://localhost:4000/blpop?key=somekey&timeout=10 it should remove and get the first element in a list, or block until one is available
// When the server receives a request on http://localhost:4000/brpop?key=somekey&timeout=10 it should remove and get the last element in a list, or block until one is available
// When the server receives a request on http://localhost:4000/brpoplpush?source=somesource&destination=somedestination&timeout=10 it should pop a value from a list, push it to another list and return it; or block until one is available
// When the server receives a request on http://localhost:4000/sadd?key=somekey&member=somemember it should add one or more members to a set
// When the server receives a request on http://localhost:4000/scard?key=somekey it should get the number of members in a set
// When the server receives a request on http://localhost:4000/sdiff?keys=somekey it should subtract multiple sets
// When the server receives a request on http://localhost:4000/rpush?key=somekey&value=somevalue it should append one or multiple values to a list
// When the server receives a request on http://localhost:4000/rpushx?key=somekey&value=somevalue it should append a value to a list, only if the list exists
// When the server receives a request on http://localhost:4000/sadd?key=somekey&member=somemember it should add one or more members to a set
// When the server receives a request on http://localhost:4000/scard?key=somekey it should get the number of members in a set
// When the server receives a request on http://localhost:4000/sdiff?key=somekey it should subtract multiple sets
// When the server receives a request on http://localhost:4000/sdiffstore?destination=somedestination&key=somekey it should subtract multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/sinter?key=somekey it should intersect multiple sets
// When the server receives a request on http://localhost:4000/sinterstore?destination=somedestination&key=somekey it should intersect multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/sismember?key=somekey&member=somemember it should determine if a given value is a member of a set
// When the server receives a request on http://localhost:4000/rpush?key=somekey&value=somevalue it should append one or multiple values to a list
// When the server receives a request on http://localhost:4000/rpushx?key=somekey&value=somevalue it should append a value to a list, only if the list exists
// When the server receives a request on http://localhost:4000/blpop?key=somekey&timeout=10 it should remove and get the first element in a list, or block until one is available
// When the server receives a request on http://localhost:4000/brpop?key=somekey&timeout=10 it should remove and get the last element in a list, or block until one is available
// When the server receives a request on http://localhost:4000/brpoplpush?source=somesource&destination=somedestination&timeout=10 it should pop a value from a list, push it to another list and return it; or block until one is available
// When the server receives a request on http://localhost:4000/sadd?key=somekey&member=somemember it should add one or more members to a set
// When the server receives a request on http://localhost:4000/scard?key=somekey it should get the number of members in a set
// When the server receives a request on http://localhost:4000/sdiff?key=somekey it should subtract multiple sets
// When the server receives a request on http://localhost:4000/sdiffstore?destination=somedestination&key=somekey it should subtract multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/sinter?key=somekey it should intersect multiple sets
// When the server receives a request on http://localhost:4000/sinterstore?destination=somedestination&key=somekey it should intersect multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/rpush?key=somekey&value=somevalue it should append one or multiple values to a list
// When the server receives a request on http://localhost:4000/rpushx?key=somekey&value=somevalue it should append a value to a list, only if the list exists
// When the server receives a request on http://localhost:4000/blpop?key=somekey&timeout=10 it should remove and get the first element in a list, or block until one is available
// When the server receives a request on http://localhost:4000/brpop?key=somekey&timeout=10 it should remove and get the last element in a list, or block until one is available
// When the server receives a request on http://localhost:4000/brpoplpush?source=somesource&destination=somedestination&timeout=10 it should pop a value from a list, push it to another list and return it; or block until one is available
// When the server receives a request on http://localhost:4000/sadd?key=somekey&member=somemember it should add one or more members to a set
// When the server receives a request on http://localhost:4000/scard?key=somekey it should get the number of members in a set
// When the server receives a request on http://localhost:4000/sdiff?key=somekey it should subtract multiple sets
// When the server receives a request on http://localhost:4000/sdiffstore?destination=somedestination&key=somekey it should subtract multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/sinter?key=somekey it should intersect multiple sets
// When the server receives a request on http://localhost:4000/smove?source=somesource&destination=somedestination&member=somemember it should move a member from one set to another
// When the server receives a request on http://localhost:4000/spop?key=somekey it should remove and return one or multiple random members from a set
// When the server receives a request on http://localhost:4000/srandmember?key=somekey it should return one or multiple random members from a set
// When the server receives a request on http://localhost:4000/srem?key=somekey&member=somemember it should remove one or more members from a set
// When the server receives a request on http://localhost:4000/sunion?key=somekey it should add multiple sets
// When the server receives a request on http://localhost:4000/sunionstore?destination=somedestination&key=somekey it should add multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/zadd?key=somekey&score=10&member=somemember it should add one or more members to a sorted set, or update its score if it already exists
// When the server receives a request on http://localhost:4000/zcard?key=somekey it should get the number of members in a sorted set
// When the server receives a request on http://localhost:4000/zcount?key=somekey&min=0&max=100 it should count the members in a sorted set with scores within the given values
// When the server receives a request on http://localhost:4000/zincrby?key=somekey&increment=10&member=somemember it should increment the score of a member in a sorted set
// When the server receives a request on http://localhost:4000/smove?source=somesource&destination=somedestination&member=somemember it should move a member from one set to another
// When the server receives a request on http://localhost:4000/spop?key=somekey it should remove and return one or multiple random members from a set
// When the server receives a request on http://localhost:4000/srandmember?key=somekey it should get one or multiple random members from a set
// When the server receives a request on http://localhost:4000/srem?key=somekey&member=somemember it should remove one or more members from a set
// When the server receives a request on http://localhost:4000/sunion?key=somekey it should add multiple sets
// When the server receives a request on http://localhost:4000/sunionstore?destination=somedestination&key=somekey it should add multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/zadd?key=somekey&score=0&member=somemember it should add one or more members to a sorted set, or update its score if it already exists
// When the server receives a request on http://localhost:4000/zcard?key=somekey it should get the number of members in a sorted set
// When the server receives a request on http://localhost:4000/zcount?key=somekey&min=0&max=10 it should count the members in a sorted set with scores within the given values
// When the server receives a request on http://localhost:4000/zincrby?key=somekey&increment=1&member=somemember it should increment the score of a member in a sorted set
// When the server receives a request on http://localhost:4000/zinterstore?destination=somedestination&key=somekey it should intersect multiple sorted sets and store the resulting sorted set in a new key
// When the server receives a request on http://localhost:4000/smove?source=somesource&destination=somedestination&member=somemember it should move a member from one set to another
// When the server receives a request on http://localhost:4000/spop?key=somekey it should remove and return one or multiple random members from a set
// When the server receives a request on http://localhost:4000/srandmember?key=somekey it should return one or multiple random members from a set
// When the server receives a request on http://localhost:4000/srem?key=somekey&member=somemember it should remove one or more members from a set
// When the server receives a request on http://localhost:4000/sunion?key=somekey it should add multiple sets
// When the server receives a request on http://localhost:4000/sunionstore?destination=somedestination&key=somekey it should add multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/zadd?key=somekey&score=1&member=somemember it should add one or more members to a sorted set, or update its score if it already exists
// When the server receives a request on http://localhost:4000/zcard?key=somekey it should get the number of members in a sorted set
// When the server receives a request on http://localhost:4000/zcount?key=somekey&min=0&max=10 it should count the members in a sorted set with scores within the given values
// When the server receives a request on http://localhost:4000/zincrby?key=somekey&increment=1&member=somemember it should increment the score of a member in a sorted set
// When the server receives a request on http://localhost:4000/smove?source=somesource&destination=somedestination&member=somemember it should move a member from one set to another
// When the server receives a request on http://localhost:4000/spop?key=somekey it should remove and return one or multiple random members from a set
// When the server receives a request on http://localhost:4000/srandmember?key=somekey it should get one or multiple random members from a set
// When the server receives a request on http://localhost:4000/srem?key=somekey&member=somemember it should remove one or more members from a set
// When the server receives a request on http://localhost:4000/sunion?key=somekey it should add multiple sets
// When the server receives a request on http://localhost:4000/sunionstore?destination=somedestination&key=somekey it should add multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/zadd?key=somekey&score=10&member=somemember it should add one or more members to a sorted set, or update its score if it already exists
// When the server receives a request on http://localhost:4000/zcard?key=somekey it should get the number of members in a sorted set
// When the server receives a request on http://localhost:4000/zcount?key=somekey&min=0&max=10 it should count the members in a sorted set with scores within the given values
// When the server receives a request on http://localhost:4000/zincrby?key=somekey&increment=10&member=somemember it should increment the score of a member in a sorted set
// When the server receives a request on http://localhost:4000/smove?source=somesource&destination=somedestination&member=somemember it should move a member from one set to another
// When the server receives a request on http://localhost:4000/spop?key=somekey it should remove and return one or multiple random members from a set
// When the server receives a request on http://localhost:4000/srandmember?key=somekey it should return one or multiple random members from a set
// When the server receives a request on http://localhost:4000/srem?key=somekey&member=somemember it should remove one or more members from a set
// When the server receives a request on http://localhost:4000/sunion?key=somekey it should add multiple sets
// When the server receives a request on http://localhost:4000/sunionstore?destination=somedestination&key=somekey it should add multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/zadd?key=somekey&score=1&member=somemember it should add one or more members to a sorted set, or update its score if it already exists
// When the server receives a request on http://localhost:4000/zcard?key=somekey it should get the number of members in a sorted set
// When the server receives a request on http://localhost:4000/zcount?key=somekey&min=1&max=10 it should count the members in a sorted set with scores within the given values
// When the server receives a request on http://localhost:4000/zincrby?key=somekey&increment=1&member=somemember it should increment the score of a member in a sorted set
// When the server receives a request on http://localhost:4000/smembers?key=somekey it should get all the members in a set
// When the server receives a request on http://localhost:4000/smove?source=somesource&destination=somedestination&member=somemember it should move a member from one set to another
// When the server receives a request on http://localhost:4000/spop?key=somekey it should remove and return one or multiple random members from a set
// When the server receives a request on http://localhost:4000/srandmember?key=somekey it should return one or multiple random members from a set
// When the server receives a request on http://localhost:4000/srem?key=somekey&member=somemember it should remove one or more members from a set
// When the server receives a request on http://localhost:4000/sunion?key=somekey it should add multiple sets
// When the server receives a request on http://localhost:4000/sunionstore?destination=somedestination&key=somekey it should add multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/zadd?key=somekey&member=somemember&score=1 it should add one or more members to a sorted set, or update its score if it already exists
// When the server receives a request on http://localhost:4000/zcard?key=somekey it should get the number of members in a sorted set
// When the server receives a request on http://localhost:4000/zcount?key=somekey&min=1&max=10 it should count the members in a sorted set with scores within the given values
// When the server receives a request on http://localhost:4300/zincrby?key=somekey&increment=1&member=somemember it should increment the score of a member in a sorted set
// When the server receives a request on http://localhost:4000/smembers?key=somekey it should get all the members in a set
// When the server receives a request on http://localhost:4000/smove?source=somesource&destination=somedestination&member=somemember it should move a member from one set to another
// When the server receives a request on http://localhost:4000/spop?key=somekey it should remove and return one or multiple random members from a set
// When the server receives a request on http://localhost:4000/srandmember?key=somekey it should get one or multiple random members from a set
// When the server receives a request on http://localhost:4000/srem?key=somekey&member=somemember it should remove one or more members from a set
// When the server receives a request on http://localhost:4000/sunion?key=somekey it should add multiple sets
// When the server receives a request on http://localhost:4000/sunionstore?destination=somedestination&key=somekey it should add multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/zadd?key=somekey&score=10&member=somemember it should add one or more members to a sorted set, or update its score if it already exists
// When the server receives a request on http://localhost:4000/zcard?key=somekey it should get the number of members in a sorted set
// When the server receives a request on http://localhost:4000/zcount?key=somekey&min=0&max=10 it should count the members in a sorted set with scores within the given values
// When the server receives a request on http://localhost:4000/zincrby?key=somekey&increment=10&member=somemember it should increment the score of a member in a sorted set
// When the server receives a request on http://localhost:4000/smembers?key=somekey it should get all the members in a set
// When the server receives a request on http://localhost:4000/smove?source=somesource&destination=somedestination&member=somemember it should move a member from one set to another
// When the server receives a request on http://localhost:4000/spop?key=somekey it should remove and return one or multiple random members from a set
// When the server receives a request on http://localhost:4000/srandmember?key=somekey it should get one or multiple random members from a set
// When the server receives a request on http://localhost:4000/srem?key=somekey&member=somemember it should remove one or more members from a set
// When the server receives a request on http://localhost:4000/sunion?key=somekey it should add multiple sets
// When the server receives a request on http://localhost:4000/sunionstore?destination=somedestination&key=somekey it should add multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/zadd?key=somekey&score=10&member=somemember it should add one or more members to a sorted set, or update its score if it already exists
// When the server receives a request on http://localhost:4000/zcard?key=somekey it should get the number of members in a sorted set
// When the server receives a request on http://localhost:4000/zcount?key=somekey&min=10&max=20 it should count the members in a sorted set with scores within the given values
// When the server receives a request on http://localhost:4000/zincrby?key=somekey&increment=1&member=somemember it should increment the score of a member in a sorted set
// When the server receives a request on http://localhost:4000/rpush?key=somekey&value=somevalue it should append one or multiple values to a list
// When the server receives a request on http://localhost:4000/rpushx?key=somekey&value=somevalue it should append a value to a list, only if the list exists
// When the server receives a request on http://localhost:4000/blpop?key=somekey&timeout=10 it should remove and get the first element in a list, or block until one is available
// When the server receives a request on http://localhost:4000/brpop?key=somekey&timeout=10 it should remove and get the last element in a list, or block until one is available
// When the server receives a request on http://localhost:4000/brpoplpush?source=somesource&destination=somedestination&timeout=10 it should pop a value from a list, push it to another list and return it; or block until one is available
// When the server receives a request on http://localhost:4000/sadd?key=somekey&member=somemember it should add one or more members to a set
// When the server receives a request on http://localhost:4000/scard?key=somekey it should get the number of members in a set
// When the server receives a request on http://localhost:4000/sdiff?key=somekey it should subtract multiple sets
// When the server receives a request on http://localhost:4000/sdiffstore?destination=somedestination&key=somekey it should subtract multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/sinter?key=somekey it should intersect multiple sets
// When the server receives a request on http://localhost:4000/sinterstore?destination=somedestination&key=somekey it should intersect multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/sismember?key=somekey&member=somemember it should determine if a given value is a member of a set
// When the server receives a request on http://localhost:4000/rpush?key=somekey&value=somevalue it should append one or multiple values to a list
// When the server receives a request on http://localhost:4000/rpushx?key=somekey&value=somevalue it should append a value to a list, only if the list exists
// When the server receives a request on http://localhost:4000/blpop?key=somekey&timeout=10 it should remove and get the first element in a list, or block until one is available
// When the server receives a request on http://localhost:4000/brpop?key=somekey&timeout=10 it should remove and get the last element in a list, or block until one is available
// When the server receives a request on http://localhost:4000/brpoplpush?source=somesource&destination=somedestination&timeout=10 it should pop a value from a list, push it to another list and return it; or block until one is available
// When the server receives a request on http://localhost:4000/sadd?key=somekey&member=somemember it should add one or more members to a set
// When the server receives a request on http://localhost:4000/scard?key=somekey it should get the number of members in a set
// When the server receives a request on http://localhost:4000/sdiff?key=somekey it should subtract multiple sets
// When the server receives a request on http://localhost:4000/sdiffstore?destination=somedestination&key=somekey it should subtract multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/sinter?key=somekey it should intersect multiple sets
// When the server receives a request on http://localhost:4000/sinterstore?destination=somedestination&key=somekey it should intersect multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/smove?source=somesource&destination=somedestination&member=somemember it should move a member from one set to another
// When the server receives a request on http://localhost:4000/spop?key=somekey it should remove and return one or multiple random members from a set
// When the server receives a request on http://localhost:4000/srandmember?key=somekey it should return one or multiple random members from a set
// When the server receives a request on http://localhost:4000/srem?key=somekey&member=somemember it should remove one or more members from a set
// When the server receives a request on http://localhost:4000/sunion?key=somekey it should add multiple sets
// When the server receives a request on http://localhost:4000/sunionstore?destination=somedestination&key=somekey it should add multiple sets and store the resulting set in a key
// When the server receives a request on http://localhost:4000/zadd?key=somekey&score=1&member=somemember it should add one or more members to a sorted set, or update its score if it already exists
// When the server receives a request on http://localhost:4000/zcard?key=somekey it should get the number of members in a sorted set
// When the server receives a request on http://localhost:4000/zcount?key=somekey&min=0&max=10 it should count the members in a sorted set with scores within the given values
// When the server receives a request on http://localhost:4000/zincrby?key=somekey&increment=1&member=somemember it should increment the score of a member in a sorted set
// When the server receives a request on http://localhost:4000/zinterstore?destination=somedestination&key=somekey it should intersect multiple sorted sets and store the resulting sorted set in a new key
// When the server receives a request on http://localhost:4000/zrange?key=somekey&start=0&stop=10 it should return a range of members in a sorted set, by index
// When the server receives a request on http://localhost:4000/zrangebyscore?key=somekey&min=0&max=10 it should return a range of members in a sorted set, by score
// When the server receives a request on http://localhost:4000/zrank?key=somekey&member=somemember it should determine the index of a member in a sorted set
// When the server receives a request on http://localhost:4000/zrem?key=somekey&member=somemember it should remove one or more members from a sorted set
// When the server receives a request on http://localhost:4000/zremrangebyscore?key=somekey&min=0&max=10 it should remove all members in a sorted set within the given indexes
// When the server receives a request on http://localhost:4000/zrevrange?key=somekey&start=0&stop=10 it should return a range of members in a sorted set, by index, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zrevrangebyscore?key=somekey&min=0&max=10 it should return a range of members in a sorted set, by score, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zrevrank?key=somekey&member=somemember it should determine the index of a member in a sorted set, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zinterstore?destination=somedestination&key=somekey it should intersect multiple sorted sets and store the resulting sorted set in a new key
// When the server receives a request on http://localhost:4000/zrange?key=somekey&start=0&stop=10 it should return a range of members in a sorted set, by index
// When the server receives a request on http://localhost:4000/zrangebyscore?key=somekey&min=0&max=10 it should return a range of members in a sorted set, by score
// When the server receives a request on http://localhost:4000/zrank?key=somekey&member=somemember it should determine the index of a member in a sorted set
// When the server receives a request on http://localhost:4000/zrem?key=somekey&member=somemember it should remove one or more members from a sorted set
// When the server receives a request on http://localhost:4000/zremrangebyrank?key=somekey&start=0&stop=10 it should remove all members in a sorted set within the given indexes
// When the server receives a request on http://localhost:4000/zremrangebyscore?key=somekey&min=0&max=10 it should remove all members in a sorted set within the given scores
// When the server receives a request on http://localhost:4000/zrevrange?key=somekey&start=0&stop=10 it should return a range of members in a sorted set, by index, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zrevrangebyscore?key=somekey&min=0&max=10 it should return a range of members in a sorted set, by score, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zinterstore?destination=somedestination&key=somekey it should intersect multiple sorted sets and store the resulting sorted set in a new key
// When the server receives a request on http://localhost:4000/zrange?key=somekey&start=0&stop=10 it should return a range of members in a sorted set, by index
// When the server receives a request on http://localhost:4000/zrangebyscore?key=somekey&min=0&max=10 it should return a range of members in a sorted set, by score
// When the server receives a request on http://localhost:4000/zrank?key=somekey&member=somemember it should determine the index of a member in a sorted set
// When the server receives a request on http://localhost:4000/zrem?key=somekey&member=somemember it should remove one or more members from a sorted set
// When the server receives a request on http://localhost:4000/zremrangebyscore?key=somekey&min=0&max=10 it should remove all members in a sorted set within the given indexes
// When the server receives a request on http://localhost:4000/zrevrange?key=somekey&start=0&stop=10 it should return a range of members in a sorted set, by index, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zrevrangebyscore?key=somekey&min=0&max=10 it should return a range of members in a sorted set, by score, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zrevrank?key=somekey&member=somemember it should determine the index of a member in a sorted set, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zinterstore?destination=somedestination&key=somekey it should intersect multiple sorted sets and store the resulting sorted set in a new key
// When the server receives a request on http://localhost:4000/zrange?key=somekey&start=0&stop=10 it should return a range of members in a sorted set, by index
// When the server receives a request on http://localhost:4000/zrangebyscore?key=somekey&min=0&max=10 it should return a range of members in a sorted set, by score
// When the server receives a request on http://localhost:4000/zrank?key=somekey&member=somemember it should determine the index of a member in a sorted set
// When the server receives a request on http://localhost:4000/zrem?key=somekey&member=somemember it should remove one or more members from a sorted set
// When the server receives a request on http://localhost:4000/zremrangebyrank?key=somekey&start=0&stop=10 it should remove all members in a sorted set within the given indexes
// When the server receives a request on http://localhost:4000/zremrangebyscore?key=somekey&min=0&max=10 it should remove all members in a sorted set within the given scores
// When the server receives a request on http://localhost:4000/zrevrange?key=somekey&start=0&stop=10 it should return a range of members in a sorted set, by index, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zrevrangebyscore?key=somekey&min=0&max=10 it should return a range of members in a sorted set, by score, with scores ordered from high to
// When the server receives a request on http://localhost:4000/zrevrangebyscore?key=somekey&min=0&max=10 it should return a range of members in a sorted set, by score, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zinterstore?destination=somedestination&key=somekey it should intersect multiple sorted sets and store the resulting sorted set in a new key
// When the server receives a request on http://localhost:4000/zrange?key=somekey&start=0&stop=-1 it should return a range of members in a sorted set, by index
// When the server receives a request on http://localhost:4000/zrangebyscore?key=somekey&min=0&max=10 it should return a range of members in a sorted set, by score low
//rank?key=somekey&member=somemember it should determine the index of a member in a sorted set
// When the server receives a request on http://localhost:4000/zrem?key=somekey&membe=sommember it should remoe one or more members fom  sorted set
// Whe the server receives a request on http://localhost:4000/zremranyrank?key=someke&tart=0&stop=10 it should remove all members in a sorted set within the given indexes
// When the server receives a request on http://localhost:4000/zremrangebysemove all mmbers in a sorted set within the given scores
// When the server receives a request on htp://localhost:4000/zrevrange?key=somekey&start=0&stop=-1 it should ret index,with ores ordered from high t low
// When the sever receives a requst on http://localhost:4000/zrevrangebyscore?key=somekey&min=10&max=0 it should return a range of members in a sorted setby score, h to low
// When the server receives a request on http://localhost:4000/zinterstore?destination=somedestination&key=somekey it sould intersect multiplesored sets and strethe resuting srted set in a ne key
//When the server receives a request on http://localhost:4000/zrange?key=somekey&start=0&stop=10 it should return a range of members in a sorted set, by index
// When the server receives a request on http://localhost:4000/zrangebyscore?key=somekey&max=10&min=0 it should return a range of members in a sorted set, by score
// When the server receives a request on http://localhost:4000/zrank?key=somekey&member=somemember it should determine the index of a member in a sorted set
// When the server receives a request on http://localhost:4000/zrem?key=somekey&member=somemember it should remove one or more members from a sorted set
// When the server receives a request on http://localhost:4000/zremrangebyrank?key=somekey&start=0&stop=10 it should remove all members in a sorted set within the given indexes
// When the server receives a request on http://localhost:4000/zremrangebyscore?key=somekey&max=10&min=0 it should remove all members in a sorted set within the given scores
// When the server receives a request on http://localhost:4000/zrevrange?key=somekey&start=0&stop=10 it should return a range of members in a sorted set, by index, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zrevrangebyscore?key=somekey&max=10&min=0 it should return a range of members in a sorted set, by score, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zrange?key=somekey&start=0&stop=10 it should return a range of members in a sorted set, by index
// When the server receives a request on http://localhost:4000/zrangebyscore?key=somekey&min=0&max=10 it should return a range of members in a sorted set, by score
// When the server receives a request on http://localhost:4000/zrank?key=somekey&member=somemember it should determine the index of a member in a sorted set
// When the server receives a request on http://localhost:4000/zrem?key=somekey&member=somemember it should remove one or more members from a sorted set
// When the server receives a request on http://localhost:4000/zremrangebyrank?key=somekey&start=0&stop=10 it should remove all members in a sorted set within the given indexes
// When the server receives a request on http://localhost:4000/zremrangebyscore?key=somekey&min=0&max=10 it should remove all members in a sorted set within the given scores
// When the server receives a request on http://localhost:4000/zrevrange?key=somekey&start=0&stop=10 it should return a range of members in a sorted set, by index, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zrevrangebyscore?key=somekey&min=0&max=10 it should return a range of members in a sorted set, by score, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zrange?key=somekey&start=0&stop=10 it should return a range of members in a sorted set, by index
// When the server receives a request on http://localhost:4000/zrangebyscore?key=somekey&min=0&max=10 it should return a range of members in a sorted set, by score
// When the server receives a request on http://localhost:4000/zrank?key=somekey&member=somemember it should determine the index of a member in a sorted set
// When the server receives a request on http://localhost:4000/zrem?key=somekey&member=somemember it should remove one or more members from a sorted set
// When the server receives a request on http://localhost:4000/zremrangebyrank?key=somekey&start=0&stop=10 it should remove all members in a sorted set within the given indexes
// When the server receives a request on http://localhost:4000/zremrangebyscore?key=somekey&min=0&max=10 it should remove all members in a sorted set within the given scores
// When the server receives a request on http://localhost:4000/zrevrange?key=somekey&start=0&stop=10 it should return a range of members in a sorted set, by index, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zrevrangebyscore?key=somekey&max=10&min=0 it should return a range of members in a sorted set, by score, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zrange?key=somekey&start=0&stop=1 it should return a range of members in a sorted set, by index
// When the server receives a request on http://localhost:4000/zrangebyscore?key=somekey&min=0&max=10 it should return a range of members in a sorted set, by score
// When the server receives a request on http://localhost:4000/zrank?key=somekey&member=somemember it should determine the index of a member in a sorted set
// When the server receives a request on http://localhost:4000/zrem?key=somekey&member=somemember it should remove one or more members from a sorted set
// When the server receives a request on http://localhost:4000/zremrangebyrank?key=somekey&start=0&stop=1 it should remove all members in a sorted set within the given indexes
// When the server receives a request on http://localhost:4000/zremrangebyscore?key=somekey&min=0&max=10 it should remove all members in a sorted set within the given scores
// When the server receives a request on http://localhost:4000/zrevrange?key=somekey&start=0&stop=1 it should return a range of members in a sorted set, by index, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zrevrangebyscore?key=somekey&min=0&max=10 it should return a range of members in a sorted set, by score, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zinterstore?destination=somedestination&key=somekey it should intersect multiple sorted sets and store the resulting sorted set in a new key
// When the server receives a request on http://localhost:4000/zrange?key=somekey&start=0&stop=10 it should return a range of members in a sorted set, by index
// When the server receives a request on http://localhost:4000/zrangebyscore?key=somekey&min=0&max=10 it should return a range of members in a sorted set, by score
// When the server receives a request on http://localhost:4000/zrank?key=somekey&member=somemember it should determine the index of a member in a sorted set
// When the server receives a request on http://localhost:4000/zrem?key=somekey&member=somemember it should remove one or more members from a sorted set
// When the server receives a request on http://localhost:4000/zremrangebyrank?key=somekey&start=1&stop=10 it should remove all members in a sorted set within the given indexes
// When the server receives a request on http://localhost:4000/zremrangebyscore?key=somekey&min=0&max=10 it should remove all members in a sorted set within the given scores
// When the server receives a request on http://localhost:4000/zrevrange?key=somekey&start=0&stop=10 it should return a range of members in a sorted set, by index, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zrevrangebyscore?key=somekey&min=0&max=10 it should return a range of members in a sorted set, by score, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zinterstore?destination=somedestination&key=somekey it should intersect multiple sorted sets and store the resulting sorted set in a new key
// When the server receives a request on http://localhost:4000/zrange?key=somekey&start=0&stop=-1 it should return a range of members in a sorted set, by index
// When the server receives a request on http://localhost:4000/zrangebyscore?key=somekey&min=0&max=10 it should return a range of members in a sorted set, by score
// When the server receives a request on http://localhost:4000/zrank?key=somekey&member=somemember it should determine the index of a member in a sorted set
// When the server receives a request on http://localhost:4000/zrem?key=somekey&member=somemember it should remove one or more members from a sorted set
// When the server receives a request on http://localhost:4000/zremrangebyrank?key=somekey&start=0&stop=10 it should remove all members in a sorted set within the given indexes
// When the server receives a request on http://localhost:4000/zremrangebyscore?key=somekey&min=0&max=10 it should remove all members in a sorted set within the given scores
// When the server receives a request on http://localhost:4000/zrevrange?key=somekey&start=0&stop=-1 it should return a range of members in a sorted set, by index, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zrevrangebyscore?key=somekey&min=10&max=0 it should return a range of members in a sorted set, by score, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zrange?key=somekey&start=0&stop=10 it should return a range of members in a sorted set, by index
// When the server receives a request on http://localhost:4000/zrangebyscore?key=somekey&min=0&max=10 it should return a range of members in a sorted set, by score
// When the server receives a request on http://localhost:4000/zrank?key=somekey&member=somemember it should determine the index of a member in a sorted set
// When the server receives a request on http://localhost:4000/zrem?key=somekey&member=somemember it should remove one or more members from a sorted set
// When the server receives a request on http://localhost:4000/zremrangebyrank?key=somekey&start=0&stop=10 it should remove all members in a sorted set within the given indexes
// When the server receives a request on http://localhost:4000/zremrangebyscore?key=somekey&min=0&max=10 it should remove all members in a sorted set within the given scores
// When the server receives a request on http://localhost:4000/zrevrange?key=somekey&start=0&stop=10 it should return a range of members in a sorted set, by index, with scores ordered from high to low
// When the server receives a request on http://localhost:4000/zrevrangebyscore?key=somekey&max=10&min=0 it should return a range of members in a sorted set, by score, with scores ordered from high to low






const http = require('http');
const fs = require('fs');
const port = 5000

// Create a file to store the key-value pairs
fs.openSync('store.txt', 'w');

const server = http.createServer((request, response) => {
  // Get the URL and query string from the request
  const url = request.url;
  const queryString = url.split('?')[1];

  //When the server receives a request on http://localhost:7007/set?somekey=somevalue it should store the passed key and value in memory
  if (url.startsWith('/set?')) {
    // Split the query string on the '=' character to get the key and value
    const [key, value] = queryString.split('=');

    // Append the key-value pair to the file
    fs.appendFileSync('storage.txt', `${key}=${value}\n`);

    // Send a response to confirm that the value was stored
    response.end(`Value stored for key: ${key} & value: ${value}`);
  }



   // When the server receives a request on http://localhost:7007/get?key=somekey it should return the value stored at key in memory.
  if (url.startsWith('/get?')) {
    // Get the key from the query string
    const key = queryString.split('=')[1];

    // Read the file and search for the value
    const data = fs.readFileSync('storage.txt', 'utf8');
    const lines = data.split('\n');
    let value;
    lines.forEach(line => {
        if(line.startsWith(key)){
            value = line.split('=')[1];
        }
    });

    // Send the value back as the response
    response.end(value);
  }


  // When the server receives a request on http://localhost:4000/del?key=somekey it should delete the value stored at somekey
  if (url.startsWith('/del?')) {
    // Get the key from the query string
    const key = queryString.split('=')[1];

    // Read the file and search for the key-value pair
    const data = fs.readFileSync('storage.txt', 'utf8');
    const lines = data.split('\n');
    let newData = "";
    let deleted = false;
    lines.forEach(line => {
        if(line.startsWith(key+"=")){
            deleted = true;
        }else{
            newData += line + "\n";
        }
    });

    //overwrite the file 
    fs.writeFileSync('storage.txt', newData);
    if(deleted)
    // Send the value back as the response
    response.end(`Key ${key} and its value is deleted`);
    else
    // Send the value back as the response
    response.end(`Key ${key} not found`);
  }

  // When the server receives a request on http://localhost:4000/inc?key=somekey it should increment the value stored at somekey by one
  if (url.startsWith('/inc?')) {
    // Get the key from the query string
    const key = queryString.split('=')[1];

    // Read the file and search for the key-value pair
    const data = fs.readFileSync('storage.txt', 'utf8');
    const lines = data.split('\n');
    let newData = "";
    let incremented = false;
    lines.forEach(line => {
        if(line.startsWith(key+"=")){
            const [k, v] = line.split('=');
            if(Number.isInteger(parseInt(v))){
                newData += k+'='+(parseInt(v)+1)+'\n';
                incremented = true;
            }else{
                response.end(`Value stored at key ${key} is not an integer`);
                return;
            }
        }else{
            newData += line + "\n";
        }
    });

    //overwrite the file 
    fs.writeFileSync('storage.txt', newData);
    if(incremented)
    // Send the value back as the response
    response.end(`Key ${key} and its value is incremented by 1`);
    else
    // Send the value back as the response
    response.end(`Key ${key} not found`);
  }

  // When the server receives a request on http://localhost:4000/dec?key=somekey it should decrement the value stored at somekey by one
  if (url.startsWith('/dec?')) {
    // Get the key from the query string
    const key = queryString.split('=')[1];

    // Read the file and search for the key-value pair
    const data = fs.readFileSync('storage.txt', 'utf8');
    const lines = data.split('\n');
    let newData = "";
    let decremented = false;
    lines.forEach(line => {
        if(line.startsWith(key+"=")){
            const [k, v] = line.split('=');
            if(Number.isInteger(parseInt(v))){
                newData += k+'='+(parseInt(v)-1)+'\n';
                decremented = true;
            }else{
                response.end(`Value stored at key ${key} is not an integer`);
                return;
            }
        }else{
            newData += line + "\n";
        }
    });

    //overwrite the file 
    fs.writeFileSync('storage.txt', newData);
    if(decremented)
    // Send the value back as the response
    response.end(`Key ${key} and its value is decremented by 1`);
    else
    // Send the value back as the response
    response.end(`Key ${key} not found`);
  }

  // When the server receives a request on http://localhost:4000/ it should return a json response showing all keys and values in memory
  if (url.startsWith('/')) {
    // Read the file and retrieve all key-value pairs
    const data = fs.readFileSync('storage.txt', 'utf8');
    const lines = data.split('\n');
    let allKV = {};
    lines.forEach(line => {
        if(line.trim().length>0){
            const [k, v] = line.split('=');
            allKV[k] = v;
        }
    });

    // Send all key-value pairs as a JSON response
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(allKV));
  }


  // When the server receives a request on http://localhost:4000/keys it should return a JSON object with all the keys currently stored
  if (url.startsWith('/keys')) {
    // Read the file and retrieve all keys
    const data = fs.readFileSync('storage.txt', 'utf8');
    const lines = data.split('\n');
    let allKeys = [];
    lines.forEach(line => {
        if(line.trim().length>0){
            const [k] = line.split('=');
            allKeys.push(k);
        }
    });

    // Send all keys as a JSON response
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(allKeys));
  }

  //When the server receives a request on http://localhost:4000/count it should return the number of keys currently stored
  if (url.startsWith('/count')) {
    // Read the file and count the number of keys
    const data = fs.readFileSync('storage.txt', 'utf8');
    const lines = data.split('\n');
    let count = 0;
    lines.forEach(line => {
        if(line.trim().length>0){
            count++;
        }
    });

    // Send the count as a response
    response.end(count.toString());
  }

  






});

// Start the server on port 
server.listen(port, () => console.log(`Example app listening on port ${port}!`));
